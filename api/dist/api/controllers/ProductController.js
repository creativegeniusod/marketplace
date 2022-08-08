"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const ProductService_1 = require("../services/ProductService");
const ProductToCategoryService_1 = require("../services/ProductToCategoryService");
const ProductImageService_1 = require("../services/ProductImageService");
const ProductModel_1 = require("../models/ProductModel");
const class_transformer_1 = require("class-transformer");
const DeleteProductRequest_1 = require("./requests/DeleteProductRequest");
const CreateProductRequest_1 = require("./requests/CreateProductRequest");
const UpdateProductRequest_1 = require("./requests/UpdateProductRequest");
const ProductToCategory_1 = require("../models/ProductToCategory");
const ProductImage_1 = require("../models/ProductImage");
const CategoryService_1 = require("../services/CategoryService");
const OrderProductService_1 = require("../services/OrderProductService");
const OrderService_1 = require("../services/OrderService");
const UpdateTodayDealsParam_1 = require("./requests/UpdateTodayDealsParam");
const ProductViewLogService_1 = require("../services/ProductViewLogService");
const moment = require("moment");
const fs = require("fs");
let ProductController = class ProductController {
    constructor(productService, productToCategoryService, productImageService, categoryService, orderProductService, orderService, productViewLogService) {
        this.productService = productService;
        this.productToCategoryService = productToCategoryService;
        this.productImageService = productImageService;
        this.categoryService = categoryService;
        this.orderProductService = orderProductService;
        this.orderService = orderService;
        this.productViewLogService = productViewLogService;
    }
    // Product List API
    /**
     * @api {get} /api/product/productlist Product List API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} sku sku
     * @apiParam (Request body) {String} status status
     * @apiParam (Request body) {Number} price=1/2 if 1->asc 2->desc
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product list",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/product/productlist
     * @apiErrorExample {json} productList error
     * HTTP/1.1 500 Internal Server Error
     */
    productList(limit, offset, keyword, sku, status, price, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['productId', 'sku', 'name', 'quantity', 'price', 'image', 'imagePath', 'todayDeals', 'isActive'];
            const relation = [];
            const WhereConditions = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                }, {
                    name: 'sku',
                    op: 'like',
                    value: sku,
                }, {
                    name: 'isActive',
                    op: 'like',
                    value: status,
                },
            ];
            const productLists = yield this.productService.list(limit, offset, select, relation, WhereConditions, 0, price, count);
            if (count) {
                const successRes = {
                    status: 1,
                    message: 'Successfully got count ',
                    data: productLists,
                };
                return response.status(200).send(successRes);
            }
            const productList = productLists.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const defaultValue = yield this.productImageService.findOne({
                    where: {
                        productId: value.productId,
                        defaultImage: 1,
                    },
                });
                const temp = value;
                temp.productImage = defaultValue;
                return temp;
            }));
            const results = yield Promise.all(productList);
            const successResponse = {
                status: 1,
                message: 'Successfully got the complete product list. ',
                data: class_transformer_1.classToPlain(results),
            };
            return response.status(200).send(successResponse);
        });
    }
    // Create Product API
    /**
     * @api {post} /api/product/add-product Add Product API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} productName productName
     * @apiParam (Request body) {String} productDescription productDescription
     * @apiParam (Request body) {String} sku stock keeping unit
     * @apiParam (Request body) {String} upc upc
     * @apiParam (Request body) {String} image product Image
     * @apiParam (Request body) {String} metaTagTitle metaTagTitle
     * @apiParam (Request body) {String} categoryId CategoryId
     * @apiParam (Request body) {Number}  model model
     * @apiParam (Request body) {String} location location
     * @apiParam (Request body) {String} price price
     * @apiParam (Request body) {Number} outOfStockStatus outOfStockStatus
     * @apiParam (Request body) {Number} requiredShipping requiredShipping
     * @apiParam (Request body) {String} dateAvailable dateAvailable
     * @apiParam (Request body) {Number} condition 1->new 2->used
     * @apiParam (Request body) {Number} status status
     * @apiParam (Request body) {Number} sortOrder sortOrder
     * @apiParamExample {json} Input
     * {
     *      "productName" : "",
     *      "productDescription" : "",
     *      "sku" : "",
     *      "image" : "",
     *      "metaTagTitle" : "",
     *      "categoryId" : "",
     *      "upc" : "",
     *      "model" : "",
     *      "price" : "",
     *      "location" : "",
     *      "outOfStockStatus" : "",
     *      "requiredShipping" : "",
     *      "dateAvailable" : "",
     *      "status" : "",
     *      "outOfStockStatus" : "",
     *      "sortOrder" : "",
     *      "condition" : "",
     *      "image":[
     *      {
     *      "image":""
     *      "containerName":""
     *      "defaultImage":""
     *      }
     *      ]
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new product.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product/add-product
     * @apiErrorExample {json} AddProduct error
     * HTTP/1.1 500 Internal Server Error
     */
    addProduct(product, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newProduct = new ProductModel_1.Product();
            newProduct.name = product.productName;
            newProduct.description = product.productDescription;
            newProduct.sku = product.sku;
            newProduct.upc = product.upc;
            newProduct.location = product.location;
            newProduct.price = product.price;
            newProduct.stockStatusId = product.outOfStockStatus;
            newProduct.shipping = product.requiredShipping;
            newProduct.dateAvailable = moment(product.dateAvailable).toISOString();
            newProduct.metaTagTitle = product.metaTagTitle;
            newProduct.condition = product.condition;
            newProduct.manufacturerId = product.model;
            newProduct.isActive = product.status;
            newProduct.todayDeals = 0;
            newProduct.sortOrder = product.sortOrder;
            const saveProduct = yield this.productService.create(newProduct);
            // save category
            if (product.categoryId) {
                const category = product.categoryId;
                for (const categoryId of category) {
                    const newProductToCategory = new ProductToCategory_1.ProductToCategory();
                    newProductToCategory.productId = saveProduct.productId;
                    newProductToCategory.categoryId = categoryId;
                    newProductToCategory.isActive = 1;
                    this.productToCategoryService.create(newProductToCategory);
                }
            }
            // Save products Image
            const productImage = product.image;
            for (const imageRow of productImage) {
                const imageData = JSON.stringify(imageRow);
                const imageResult = JSON.parse(imageData);
                const newProductImage = new ProductImage_1.ProductImage();
                newProductImage.productId = saveProduct.productId;
                newProductImage.image = imageResult.image;
                newProductImage.containerName = imageResult.containerName;
                newProductImage.defaultImage = imageResult.defaultImage;
                this.productImageService.create(newProductImage);
            }
            if (saveProduct) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created Product',
                    data: saveProduct,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create Product',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // update Product API
    /**
     * @api {post} /api/product/update-product/:id Update Product API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} productId productId
     * @apiParam (Request body) {String} productName productName
     * @apiParam (Request body) {String} productDescription productDescription
     * @apiParam (Request body) {String} sku stock keeping unit
     * @apiParam (Request body) {String} upc upc
     * @apiParam (Request body) {String} image product Image
     * @apiParam (Request body) {String} metaTagTitle metaTagTitle
     * @apiParam (Request body) {String} categoryId CategoryId
     * @apiParam (Request body) {Number}  model model
     * @apiParam (Request body) {String} location location
     * @apiParam (Request body) {String} price price
     * @apiParam (Request body) {Number} outOfStockStatus outOfStockStatus
     * @apiParam (Request body) {Number} requiredShipping requiredShipping
     * @apiParam (Request body) {String} dateAvailable dateAvailable
     * @apiParam (Request body) {String} condition 1->new 2->used
     * @apiParam (Request body) {Number} status status
     * @apiParam (Request body) {Number} sortOrder sortOrder
     * @apiParamExample {json} Input
     * {
     *      "productName" : "",
     *      "productDescription" : "",
     *      "sku" : "",
     *      "image" : "",
     *      "metaTagTitle" : "",
     *      "categoryId" : "",
     *      "upc" : "",
     *      "model" : "",
     *      "price" : "",
     *      "location" : "",
     *      "outOfStockStatus" : "",
     *      "requiredShipping" : "",
     *      "dateAvailable" : "",
     *      "status" : "",
     *      "outOfStockStatus" : "",
     *      "condition" : "",
     *      "sortOrder" : "",
     *      "image":[
     *      {
     *      "image":""
     *      "containerName":""
     *      "defaultImage":""
     *      }
     *      ],
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated product.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product/update-product/:id
     * @apiErrorExample {json} updateProduct error
     * HTTP/1.1 500 Internal Server Error
     */
    updateProduct(product, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(product);
            const updateProduct = yield this.productService.findOne({
                where: {
                    productId: product.productId,
                },
            });
            if (!updateProduct) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid productId',
                };
                return response.status(400).send(errorResponse);
            }
            updateProduct.name = product.productName;
            updateProduct.description = product.productDescription;
            updateProduct.sku = product.sku;
            updateProduct.upc = product.upc;
            updateProduct.location = product.location;
            updateProduct.price = product.price;
            updateProduct.stockStatusId = product.outOfStockStatus;
            updateProduct.shipping = product.requiredShipping;
            updateProduct.dateAvailable = moment(product.dateAvailable).toISOString();
            updateProduct.metaTagTitle = product.metaTagTitle;
            updateProduct.manufacturerId = product.model;
            updateProduct.condition = product.condition;
            updateProduct.isActive = product.status;
            updateProduct.sortOrder = product.sortOrder;
            const saveProduct = yield this.productService.create(updateProduct);
            // delete previous category
            this.productToCategoryService.delete({ productId: saveProduct.productId });
            // save category
            if (product.categoryId) {
                const category = product.categoryId;
                for (const categoryId of category) {
                    const newProductToCategory = new ProductToCategory_1.ProductToCategory();
                    newProductToCategory.productId = saveProduct.productId;
                    newProductToCategory.categoryId = categoryId;
                    newProductToCategory.isActive = 1;
                    this.productToCategoryService.create(newProductToCategory);
                }
            }
            // Delete previous images
            this.productImageService.delete({ productId: saveProduct.productId });
            // Save products Image
            if (product.image) {
                const productImage = product.image;
                for (const imageRow of productImage) {
                    const imageData = JSON.stringify(imageRow);
                    const imageResult = JSON.parse(imageData);
                    const newProductImage = new ProductImage_1.ProductImage();
                    newProductImage.productId = saveProduct.productId;
                    newProductImage.image = imageResult.image;
                    newProductImage.containerName = imageResult.containerName;
                    newProductImage.defaultImage = imageResult.defaultImage;
                    this.productImageService.create(newProductImage);
                }
            }
            if (saveProduct) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated Product',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to updated Product',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Product Detail API
    /**
     * @api {get} /api/product/product-detail/:id Product Detail API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product Detail",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/product/product-detail/:id
     * @apiErrorExample {json} productDetail error
     * HTTP/1.1 500 Internal Server Error
     */
    productDetail(id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productDetail = yield this.productService.findOne({
                productId: id,
            });
            const productDetails = class_transformer_1.classToPlain(productDetail);
            productDetails.productImage = yield this.productImageService.findAll({
                select: ['productId', 'image', 'containerName', 'defaultImage'],
                where: {
                    productId: id,
                },
            });
            productDetails.Category = yield this.productToCategoryService.findAll({
                select: ['categoryId', 'productId'],
                where: { productId: id },
            }).then((val) => {
                const category = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const categoryNames = yield this.categoryService.findOne({ categoryId: value.categoryId });
                    const temp = value;
                    if (categoryNames !== undefined) {
                        temp.categoryName = categoryNames.name;
                    }
                    else {
                        temp.categoryName = '';
                    }
                    return temp;
                }));
                const results = Promise.all(category);
                return results;
            });
            const successResponse = {
                status: 1,
                message: 'Successfully get productDetail',
                data: productDetails,
            };
            return response.status(200).send(successResponse);
        });
    }
    //  Top Selling Product List API
    /**
     * @api {get} /api/product/top-selling-productlist  Top selling ProductList API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get top selling product..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product/top-selling-productlist
     * @apiErrorExample {json} top selling product error
     * HTTP/1.1 500 Internal Server Error
     */
    // Order Detail Function
    topSellingProductList(request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.productService.recentProductSelling(4);
            const promise = data.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const product = yield this.productService.findOne({
                    select: ['productId', 'image', 'imagePath', 'price', 'name', 'description'],
                    where: { productId: result.product },
                });
                const temp = result;
                const productImage = yield this.productImageService.findAll({
                    select: ['productId', 'image', 'containerName'],
                    where: {
                        productId: result.product,
                        defaultImage: 1,
                    },
                });
                temp.product = product;
                temp.productImage = productImage;
                return temp;
            }));
            const value = yield Promise.all(promise);
            const successResponse = {
                status: 1,
                message: 'Successfully get Top Selling Product..!',
                data: value,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Recent Selling Product List
    /**
     * @api {get} /api/product/recent-selling-product  Recent Selling Product List API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "successfully listed recent product selling!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product/recent-selling-product
     * @apiErrorExample {json} Selling Product List error
     * HTTP/1.1 500 Internal Server Errorproduct
     */
    // Recent selling product function
    sellingProduct(request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const limit = 3;
            const orderList = yield this.orderProductService.List(limit);
            const promises = orderList.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const order = yield this.orderService.findOrder({
                    select: ['invoiceNo', 'invoicePrefix', 'orderPrefixId', 'orderId', 'orderStatusId'],
                    where: { orderId: result.orderId },
                });
                const temp = result;
                temp.order = order;
                const product = yield this.productImageService.findAll({
                    where: {
                        productId: result.productId,
                        defaultImage: 1,
                    },
                });
                temp.productImage = product;
                return temp;
            }));
            const results = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'successfully listed recently selling products..!',
                data: results,
            };
            return response.status(200).send(successResponse);
        });
    }
    // update product to Today Deals API
    /**
     * @api {put} /api/product/update-todayDeals/:id Update Today Deals API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} todayDeals TodayDeals should be 0 or 1
     * @apiParamExample {json} Input
     * {
     *      "todayDeals" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated product to today Deals.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product/update-todayDeals/:id
     * @apiErrorExample {json} todayDeals error
     * HTTP/1.1 500 Internal Server Error
     */
    updateTodayDeals(id, updateTodayDealsParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product = yield this.productService.findOne({
                where: {
                    productId: id,
                },
            });
            if (!product) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid productId',
                };
                return response.status(400).send(errorResponse);
            }
            product.todayDeals = updateTodayDealsParam.todayDeals;
            const productSave = yield this.productService.create(product);
            if (productSave) {
                const successResponse = {
                    status: 1,
                    message: 'product updated successfully .',
                    data: productSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update product',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Recent viewLog list API
    /**
     * @api {get} /api/product/viewLog-list Product View Log List
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got Product view Log List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product/viewLog-list
     * @apiErrorExample {json} ViewLog List error
     * HTTP/1.1 500 Internal Server Error
     */
    productViewLogList(limit, offset, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = [];
            const whereConditions = [];
            const search = [];
            const viewLogs = yield this.productViewLogService.list(limit, offset, select, search, whereConditions, 0, count);
            if (count) {
                const successresponse = {
                    status: 1,
                    message: 'Successfully got view log count',
                    data: viewLogs,
                };
                return response.status(200).send(successresponse);
            }
            else {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got view log List',
                    data: viewLogs,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Customer product view list API
    /**
     * @api {get} /api/product/customerProductView-list/:id Customer product View List
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got Product view Log List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product/customerProductView-list/:id
     * @apiErrorExample {json} customerProductView List error
     * HTTP/1.1 500 Internal Server Error
     */
    customerProductView(id, limit, offset, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = [];
            const whereConditions = [{
                    name: 'customerId',
                    value: id,
                }];
            const search = [];
            const customerProductview = yield this.productViewLogService.list(limit, offset, select, search, whereConditions, 0, count);
            if (count) {
                const successresponse = {
                    status: 1,
                    message: 'Successfully got view log count',
                    data: customerProductview,
                };
                return response.status(200).send(successresponse);
            }
            else {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got view log List',
                    data: customerProductview,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Product Details Excel Document download
    /**
     * @api {get} /api/product/product-excel-list Product Excel
     * @apiGroup Product
     * @apiParam (Request body) {String} productId productId
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully download the Product Excel List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product/product-excel-list
     * @apiErrorExample {json} product Excel List error
     * HTTP/1.1 500 Internal Server Error
     */
    excelProductView(productId, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const excel = require('exceljs');
            const workbook = new excel.Workbook();
            const worksheet = workbook.addWorksheet('Product Detail Sheet');
            const rows = [];
            const productid = productId.split(',');
            for (const id of productid) {
                const dataId = yield this.productService.findOne(id);
                if (dataId === undefined) {
                    const errorResponse = {
                        status: 0,
                        message: 'Invalid productId',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
            // Excel sheet column define
            worksheet.columns = [
                { header: 'Product Id', key: 'productId', size: 16, width: 15 },
                { header: 'Product Name', key: 'name', size: 16, width: 15 },
                { header: 'Description', key: 'description', size: 16, width: 30 },
                { header: 'Price', key: 'price', size: 16, width: 15 },
                { header: 'SKU', key: 'sku', size: 16, width: 15 },
                { header: 'UPC', key: 'upc', size: 16, width: 15 },
                { header: 'Quantity', key: 'quantity', size: 16, width: 15 },
                { header: 'Minimum Quantity', key: 'minimumQuantity', size: 16, width: 19 },
                { header: 'Subtract Stock', key: 'subtractstock', size: 16, width: 15 },
                { header: 'Manufacture Id', key: 'manufactureId', size: 16, width: 15 },
                { header: 'Meta Tag Title', key: 'metaTagTitle', size: 16, width: 15 },
            ];
            worksheet.getCell('A1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('B1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('C1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('D1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('E1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('F1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('G1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('H1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('I1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('J1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            worksheet.getCell('K1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            for (const id of productid) {
                const dataId = yield this.productService.findOne(id);
                const productDescription = dataId.description;
                const dataDescription = productDescription.replace(/(&nbsp;|(<([^>]+)>))/ig, '');
                rows.push([dataId.productId, dataId.name, dataDescription.trim(), dataId.price, dataId.sku, dataId.upc, dataId.quantity, dataId.minimumQuantity, dataId.subtractStock, dataId.manufacturerId, dataId.metaTagTitle]);
            }
            // Add all rows data in sheet
            worksheet.addRows(rows);
            const fileName = './ProductExcel_' + Date.now() + '.xlsx';
            yield workbook.xlsx.writeFile(fileName);
            return new Promise((resolve, reject) => {
                response.download(fileName, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        fs.unlinkSync(fileName);
                        return response.end();
                    }
                });
            });
        });
    }
    // Delete Product API
    /**
     * @api {delete} /api/product/delete-product/:id Delete Single Product API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "id" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     * "message": "Successfully deleted Product.",
     * "status": "1"
     * }
     * @apiSampleRequest /api/product/delete-product/:id
     * @apiErrorExample {json} productDelete error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteProduct(productid, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product = yield this.productService.findOne(productid);
            if (product === undefined) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid productId',
                };
                return response.status(400).send(errorResponse);
            }
            const orderProductId = yield this.orderProductService.findOne({ where: { productId: productid } });
            if (orderProductId) {
                const errorResponse = {
                    status: 0,
                    message: 'That product is ordered',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteProduct = yield this.productService.delete(productid);
            if (deleteProduct) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted Product',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete product',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Multiple Product API
    /**
     * @api {post} /api/product/delete-product Delete Product API
     * @apiGroup Product
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} productId productId
     * @apiParamExample {json} Input
     * {
     * "productId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     * "message": "Successfully deleted Product.",
     * "status": "1"
     * }
     * @apiSampleRequest /api/product/delete-product
     * @apiErrorExample {json} productDelete error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteMultipleProduct(productDelete, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productIdNo = productDelete.productId.toString();
            const productid = productIdNo.split(',');
            for (const id of productid) {
                const dataId = yield this.productService.findOne(id);
                if (dataId === undefined) {
                    const errorResponse = {
                        status: 0,
                        message: 'Please choose a product for delete',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
            for (const id of productid) {
                const orderProductId = yield this.orderProductService.findOne({ where: { productId: id } });
                if (orderProductId) {
                    const errorResponse = {
                        status: 0,
                        message: 'That product is ordered',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
            for (const id of productid) {
                const deleteProductId = parseInt(id, 10);
                yield this.productService.delete(deleteProductId);
            }
            const successResponse = {
                status: 1,
                message: 'Successfully deleted Product',
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/productlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sku')), tslib_1.__param(4, routing_controllers_1.QueryParam('status')), tslib_1.__param(5, routing_controllers_1.QueryParam('price')), tslib_1.__param(6, routing_controllers_1.QueryParam('count')), tslib_1.__param(7, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, String, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "productList", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/add-product'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateProductRequest_1.AddProductRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "addProduct", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/update-product/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UpdateProductRequest_1.UpdateProductRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/product-detail/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "productDetail", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/top-selling-productlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Req()), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "topSellingProductList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/recent-selling-product'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Req()), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "sellingProduct", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-todayDeals/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, UpdateTodayDealsParam_1.UpdateTodayDealsParam, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "updateTodayDeals", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/viewLog-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('count')), tslib_1.__param(3, routing_controllers_1.Req()), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "productViewLogList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/customerProductView-list/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.QueryParam('limit')), tslib_1.__param(2, routing_controllers_1.QueryParam('offset')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Req()), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "customerProductView", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/product-excel-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('productId')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "excelProductView", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-product/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/delete-product'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [DeleteProductRequest_1.DeleteProductRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "deleteMultipleProduct", null);
ProductController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/product'),
    tslib_1.__metadata("design:paramtypes", [ProductService_1.ProductService,
        ProductToCategoryService_1.ProductToCategoryService,
        ProductImageService_1.ProductImageService,
        CategoryService_1.CategoryService,
        OrderProductService_1.OrderProductService,
        OrderService_1.OrderService,
        ProductViewLogService_1.ProductViewLogService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map