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
const class_transformer_1 = require("class-transformer");
const ProductToCategoryService_1 = require("../../services/ProductToCategoryService");
const ProductService_1 = require("../../services/ProductService");
const CategoryService_1 = require("../../services/CategoryService");
const ProductImageService_1 = require("../../services/ProductImageService");
const productViewLog_1 = require("../../models/productViewLog");
const ProductViewLogService_1 = require("../../services/ProductViewLogService");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const CustomerService_1 = require("../../services/CustomerService");
const CategoryPathService_1 = require("../../services/CategoryPathService");
const CustomerWishlistService_1 = require("../../services/CustomerWishlistService");
let ProductController = class ProductController {
    constructor(productService, productToCategoryService, categoryService, productImageService, customerService, productViewLogService, customerWishlistService, categoryPathService) {
        this.productService = productService;
        this.productToCategoryService = productToCategoryService;
        this.categoryService = categoryService;
        this.productImageService = productImageService;
        this.customerService = customerService;
        this.productViewLogService = productViewLogService;
        this.customerWishlistService = customerWishlistService;
        this.categoryPathService = categoryPathService;
    }
    // Product Details API
    /**
     * @api {get} /api/product-store/productdetail/:id Product Detail API
     * @apiGroup Store
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product Detail",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/product-store/productdetail/:id
     * @apiErrorExample {json} productDetail error
     * HTTP/1.1 500 Internal Server Error
     */
    productDetail(id, request, response) {
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
            if (request.header('authorization')) {
                let customerId;
                jsonwebtoken_1.default.verify(request.header('authorization').split(' ')[1], '123##$$)(***&', (err, decoded) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('lll', decoded.id);
                    customerId = decoded.id;
                });
                const wishStatus = yield this.customerWishlistService.findOne({
                    where: {
                        productId: id,
                        customerId,
                    },
                });
                if (wishStatus) {
                    productDetails.wishListStatus = 1;
                }
                else {
                    productDetails.wishListStatus = 0;
                }
                const customerDetail = yield this.customerService.findOne({ where: { id: customerId } });
                const viewLog = new productViewLog_1.ProductViewLog();
                viewLog.productId = id;
                viewLog.customerId = customerDetail.id;
                viewLog.firstName = customerDetail.firstName;
                viewLog.lastName = customerDetail.lastName;
                viewLog.username = customerDetail.username;
                viewLog.email = customerDetail.email;
                viewLog.mobileNumber = customerDetail.mobileNumber;
                viewLog.address = customerDetail.address;
                yield this.productViewLogService.create(viewLog);
            }
            else {
                productDetails.wishListStatus = 0;
            }
            const successResponse = {
                status: 1,
                message: 'Successfully get productDetail',
                data: productDetails,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Today Deals Product List API
    /**
     * @api {get} /api/product-store/todayDeals-list Today Deals List
     * @apiGroup Store
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword search by name
     * @apiParam (Request body) {String} sku search by sku
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get today deals product List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product-store/todayDeals-list
     * @apiErrorExample {json} TodayDeals List error
     * HTTP/1.1 500 Internal Server Error
     */
    todayDealsList(limit, offset, keyword, sku, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['productId', 'sku', 'upc', 'name', 'description', 'location', 'minimumQuantity',
                'quantity', 'subtractStock', 'metaTagTitle', 'manufacturerId', 'stockStatusId', 'todayDeals',
                'shipping', 'dateAvailable', 'sortOrder', 'price', 'isActive'];
            const whereConditions = [
                {
                    name: 'deleteFlag',
                    op: 'where',
                    value: 0,
                },
                {
                    name: 'todayDeals',
                    op: 'where',
                    value: 1,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'sku',
                    op: 'like',
                    value: sku,
                },
            ];
            const todayDeals = yield this.productService.list(limit, offset, select, 0, whereConditions, search, 0, count);
            if (count) {
                const successresponse = {
                    status: 1,
                    message: 'Successfully got today deals count',
                    data: todayDeals,
                };
                return response.status(200).send(successresponse);
            }
            const promises = todayDeals.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productImage = yield this.productImageService.findOne({
                    select: ['productId', 'image', 'containerName', 'defaultImage'],
                    where: {
                        productId: result.productId,
                        defaultImage: 1,
                    },
                });
                const temp = result;
                temp.productImage = productImage;
                if (request.header('authorization')) {
                    const userId = jsonwebtoken_1.default.verify(request.header('authorization').split(' ')[1], '123##$$)(***&');
                    const userUniqueId = Object.keys(userId).map((key) => {
                        return [(key), userId[key]];
                    });
                    console.log(userUniqueId[0][1]);
                    const wishStatus = yield this.customerWishlistService.findOne({
                        where: {
                            productId: result.productId,
                            customerId: userUniqueId[0][1],
                        },
                    });
                    if (wishStatus) {
                        temp.wishListStatus = 1;
                    }
                    else {
                        temp.wishListStatus = 0;
                    }
                }
                else {
                    temp.wishListStatus = 0;
                }
                return temp;
            }));
            const finalResult = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully got today deals List',
                data: finalResult,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Get Category API
    /**
     * @api {get} /api/product-store/Get-Category Get Category API
     * @apiGroup Store
     * @apiParam (Request body) {Number} CategoryId categoryId
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "successfully got the category.",
     *      "data":"{ }"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product-store/Get-Category
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    getCategory(CategoryId, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['categoryId', 'name', 'parentInt', 'sortOrder'];
            const search = [];
            const WhereConditions = [{
                    name: 'categoryId',
                    value: CategoryId,
                }];
            const category = yield this.categoryService.list(0, 0, select, search, WhereConditions, 0, 0);
            const promise = category.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const temp = result;
                const categoryLevel = yield this.categoryPathService.find({
                    select: ['level', 'pathId'],
                    where: { categoryId: result.categoryId },
                    order: { level: 'ASC' },
                }).then((values) => {
                    const categories = values.map((val) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const categoryNames = yield this.categoryService.findOne({ categoryId: val.pathId });
                        const tempVal = val;
                        tempVal.categoryName = categoryNames.name;
                        return tempVal;
                    }));
                    const results = Promise.all(categories);
                    return results;
                });
                temp.levels = categoryLevel;
                return temp;
            }));
            const value = yield Promise.all(promise);
            if (category) {
                const successResponse = {
                    status: 1,
                    message: 'successfully got the category. ',
                    data: value,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/productdetail/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "productDetail", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/todayDeals-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sku')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Req()), tslib_1.__param(6, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "todayDealsList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/Get-Category'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('CategoryId')), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "getCategory", null);
ProductController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/product-store'),
    tslib_1.__metadata("design:paramtypes", [ProductService_1.ProductService,
        ProductToCategoryService_1.ProductToCategoryService,
        CategoryService_1.CategoryService,
        ProductImageService_1.ProductImageService,
        CustomerService_1.CustomerService,
        ProductViewLogService_1.ProductViewLogService,
        CustomerWishlistService_1.CustomerWishlistService,
        CategoryPathService_1.CategoryPathService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map