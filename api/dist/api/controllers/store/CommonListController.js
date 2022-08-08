"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonListController = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const BannerService_1 = require("../../services/BannerService");
const mail_services_1 = require("../../../auth/mail.services");
const class_transformer_1 = require("class-transformer");
const CategoryService_1 = require("../../services/CategoryService");
const ProductService_1 = require("../../services/ProductService");
const array_to_tree_1 = tslib_1.__importDefault(require("array-to-tree"));
const ProductImageService_1 = require("../../services/ProductImageService");
const CountryService_1 = require("../../services/CountryService");
const ContactService_1 = require("../../services/ContactService");
const ContactRequest_1 = require("./requests/ContactRequest");
const Contact_1 = require("../../models/Contact");
const EmailTemplateService_1 = require("../../services/EmailTemplateService");
const zoneService_1 = require("../../services/zoneService");
const ProductToCategoryService_1 = require("../../services/ProductToCategoryService");
const CategoryPathService_1 = require("../../services/CategoryPathService");
const UserService_1 = require("../../services/UserService");
const CustomerWishlistService_1 = require("../../services/CustomerWishlistService");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
let CommonListController = class CommonListController {
    constructor(bannerService, categoryService, productService, productImageService, countryService, contactService, emailTemplateService, zoneService, customerWishlistService, productToCategoryService, categoryPathService, userService) {
        this.bannerService = bannerService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.productImageService = productImageService;
        this.countryService = countryService;
        this.contactService = contactService;
        this.emailTemplateService = emailTemplateService;
        this.zoneService = zoneService;
        this.customerWishlistService = customerWishlistService;
        this.productToCategoryService = productToCategoryService;
        this.categoryPathService = categoryPathService;
        this.userService = userService;
    }
    // Banner List API
    /**
     * @api {get} /api/list/banner-list Banner List
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit Limit
     * @apiParam (Request body) {Number} offset Offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiParamExample {json} Input
     * {
     *      "limit" : "",
     *      "offset": "",
     *      "count": "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Thank you Banner list show successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/banner-list
     * @apiErrorExample {json} Banner List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Product list Function
    bannerList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['bannerId', 'title', 'image', 'imagePath', 'content', 'link', 'position', 'isActive'];
            const search = [
                {
                    name: 'title',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [
                {
                    name: 'isActive',
                    value: 1,
                },
            ];
            const bannerList = yield this.bannerService.list(limit, offset, select, search, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got banner list',
                data: bannerList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Category List Tree API
    /**
     * @api {get} /api/list/category-list Category List Tree API
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit Limit
     * @apiParam (Request body) {Number} offset Offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} sortOrder sortOrder
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiParamExample {json} Input
     * {
     *      "limit" : "",
     *      "offset": "",
     *      "keyorder": "",
     *      "sortOrder": "",
     *      "count": "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "category list shown successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/category-list
     * @apiErrorExample {json} Category List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Category List Function
    ParentCategoryList(limit, offset, keyword, sortOrder, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['categoryId', 'name', 'parentInt', 'sortOrder', 'metaTagTitle', 'metaTagDescription', 'metaTagKeyword', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                }, {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                }, {
                    name: 'parentInt',
                    op: 'where',
                    value: 0,
                },
            ];
            const WhereConditions = [];
            const categoryData = yield this.categoryService.list(limit, offset, select, search, WhereConditions, sortOrder, count);
            if (count) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get All category List',
                    data: categoryData,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const category = categoryData.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const tempVal = value;
                    const child = yield this.categoryService.find({ where: { parentInt: value.categoryId, isActive: 1 },
                        select: ['categoryId', 'name', 'parentInt', 'sortOrder', 'metaTagTitle', 'metaTagDescription', 'metaTagKeyword', 'isActive'] });
                    const children = child.map((val) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const data = val;
                        const subChild = yield this.categoryService.find({ where: { parentInt: val.categoryId, isActive: 1 },
                            select: ['categoryId', 'name', 'parentInt', 'sortOrder', 'metaTagTitle', 'metaTagDescription', 'metaTagKeyword', 'isActive'] });
                        if (subChild.length > 0) {
                            data.children = subChild;
                            return data;
                        }
                        return data;
                    }));
                    const childrenData = yield Promise.all(children);
                    tempVal.children = childrenData;
                    return tempVal;
                }));
                const result = yield Promise.all(category);
                console.log(result);
                if (result) {
                    const successResponse = {
                        status: 1,
                        message: 'Successfully got the list of categories.',
                        data: result,
                    };
                    return response.status(200).send(successResponse);
                }
            }
        });
    }
    // Product List API
    /**
     * @api {get} /api/list/productlist Product List API
     * @apiGroup Store List
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} manufacturerId manufacturerId
     * @apiParam (Request body) {String} categoryId categoryId
     * @apiParam (Request body) {Number} priceFrom price from you want to list
     * @apiParam (Request body) {Number} priceTo price to you want to list
     * @apiParam (Request body) {Number} price orderBy 0->desc 1->asc
     * @apiParam (Request body) {Number} condition  1->new 2->used
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count in boolean or number
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product list",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/list/productlist
     * @apiErrorExample {json} productList error
     * HTTP/1.1 500 Internal Server Error
     */
    productList(limit, offset, keyword, manufacturerId, categoryId, priceFrom, priceTo, price, condition, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(manufacturerId);
            const select = ['product.productId', 'product.sku', 'product.name', 'product.quantity', 'product.description', 'product.price',
                'product.isActive AS isActive', 'product.manufacturerId AS manufacturerId', 'product.location AS location', 'product.minimumQuantity AS minimumQuantity',
                'product.subtractStock', 'product.stockStatusId', 'product.shipping', 'product.sortOrder', 'product.condition',
                'product.dateAvailable', 'product.amount', 'product.metaTagTitle', 'product.metaTagDescription', 'product.metaTagKeyword', 'product.discount'];
            const searchConditions = [
                {
                    name: 'product.isActive',
                    op: 'where',
                    value: 1,
                },
                {
                    name: 'product.manufacturerId',
                    op: 'and',
                    value: manufacturerId,
                },
                {
                    name: 'product.name',
                    op: 'and',
                    value: keyword,
                },
                {
                    name: 'product.condition',
                    op: 'andWhere',
                    value: condition,
                },
            ];
            const whereConditions = [{
                    name: 'product.productId',
                    op: 'inraw',
                    value: categoryId,
                }];
            const productList = yield this.productService.productList(limit, offset, select, searchConditions, whereConditions, categoryId, priceFrom, priceTo, price, count);
            if (count) {
                const Response = {
                    status: 1,
                    message: 'Successfully got Products count',
                    data: productList,
                };
                return response.status(200).send(Response);
            }
            const promises = productList.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productToCategory = yield this.productToCategoryService.findAll({
                    select: ['categoryId', 'productId'],
                    where: { productId: result.productId },
                }).then((val) => {
                    const category = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const categoryNames = yield this.categoryService.findOne({ categoryId: value.categoryId });
                        const tempValue = value;
                        tempValue.categoryName = categoryNames.name;
                        return tempValue;
                    }));
                    const results = Promise.all(category);
                    return results;
                });
                const productImage = yield this.productImageService.findOne({
                    select: ['productId', 'image', 'containerName', 'defaultImage'],
                    where: {
                        productId: result.productId,
                        defaultImage: 1,
                    },
                });
                const temp = result;
                temp.Images = productImage;
                temp.Category = productToCategory;
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
                    if (wishStatus !== undefined) {
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
            const maximum = ['Max(product.price) As maximumProductPrice'];
            const maximumPrice = yield this.productService.productMaxPrice(maximum);
            const productPrice = maximumPrice.maximumProductPrice;
            const successResponse = {
                status: 1,
                message: 'Successfully got the complete list of products.',
                data: {
                    maximumProductPrice: productPrice,
                    productList: finalResult,
                },
            };
            return response.status(200).send(successResponse);
        });
    }
    // Custom Product List API
    /**
     * @api {get} /api/list/custom-product-list Custom Product List API
     * @apiGroup Store List
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} manufacturerId manufacturerId
     * @apiParam (Request body) {String} categoryId categoryId
     * @apiParam (Request body) {Number} priceFrom price from you want to list
     * @apiParam (Request body) {Number} priceTo price to you want to list
     * @apiParam (Request body) {String} price ASC OR DESC
     * @apiParam (Request body) {Number} condition  1->new 2->used
     * @apiParam (Request body) {String} keyword keyword
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product list",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/list/custom-product-list
     * @apiErrorExample {json} productList error
     * HTTP/1.1 500 Internal Server Error
     */
    customProductList(limit, offset, keyword, manufacturerId, categoryId, priceFrom, priceTo, price, condition, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productList = yield this.productService.customProductList(limit, offset, categoryId, manufacturerId, condition, keyword, priceFrom, priceTo, price);
                const promises = productList.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const productImage = yield this.productImageService.findOne({
                        select: ['productId', 'image', 'containerName', 'defaultImage'],
                        where: {
                            productId: result.productId,
                            defaultImage: 1,
                        },
                    });
                    const temp = result;
                    temp.Images = productImage;
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
                    message: 'Successfully got the complete list of products.',
                    data: finalResult,
                };
                return response.status(200).send(successResponse);
            }));
        });
    }
    // Country List API
    /**
     * @api {get} /api/list/country-list Country List API
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get country list",
     *      "data":{
     *      "countryId"
     *      "name"
     *      "isoCode2"
     *      "isoCode3"
     *      "addressFormat"
     *      "postcodeRequired"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/country-list
     * @apiErrorExample {json} countryFront error
     * HTTP/1.1 500 Internal Server Error
     */
    countryList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['countryId', 'name', 'isoCode2', 'isoCode3', 'postcodeRequired', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const WhereConditions = [];
            const countryList = yield this.countryService.list(limit, offset, select, search, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got the list of countries.',
                data: countryList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Contact Us API
    /**
     * @api {post} /api/list/contact-us  Contact Us API
     * @apiGroup Store List
     * @apiParam (Request body) {String} name Name
     * @apiParam (Request body) {String} email Email
     * @apiParam (Request body) {String} phoneNumber Phone Number
     * @apiParam (Request body) {String} message Message
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "email" : "",
     *      "phoneNumber" : "",
     *      "message" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Your mail send to admin..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/contact-us
     * @apiErrorExample {json} Contact error
     * HTTP/1.1 500 Internal Server Error
     */
    // ContactUs Function
    userContact(contactParam, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const contactInformation = new Contact_1.Contact();
            contactInformation.name = contactParam.name;
            contactInformation.email = contactParam.email;
            contactInformation.phoneNumber = contactParam.phoneNumber;
            contactInformation.message = contactParam.message;
            const informationData = yield this.contactService.create(contactInformation);
            const emailContent = yield this.emailTemplateService.findOne(3);
            const message = emailContent.content.replace('{name}', informationData.name).replace('{email}', informationData.email).replace('{phoneNumber}', informationData.phoneNumber).replace('{message}', informationData.message);
            const adminId = [];
            const adminUser = yield this.userService.findAll({ select: ['username'], where: { userGroupId: 1 } });
            for (const user of adminUser) {
                const val = user.username;
                adminId.push(val);
            }
            const sendMailRes = mail_services_1.MAILService.contactMail(message, emailContent.subject, adminId);
            if (sendMailRes) {
                const successResponse = {
                    status: 1,
                    message: 'Your request Successfully send',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Mail does not send',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Zone List API
    /**
     * @api {get} /api/list/zone-list Zone List API
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get zone list",
     *      "data":{
     *      "countryId"
     *      "code"
     *      "name"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/zone-list
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    zonelist(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['zoneId', 'countryId', 'code', 'name', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const WhereConditions = [];
            const relation = ['country'];
            const zoneList = yield this.zoneService.list(limit, offset, select, search, WhereConditions, relation, count);
            if (zoneList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get all zone List',
                    data: class_transformer_1.classToPlain(zoneList),
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to get zone List',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Specific parent Category List API
    /**
     * @api {get} /api/list/specific-category-list Specific Category List
     * @apiGroup Store List
     * @apiParam (Request body) {Number} categoryId categoryId
     * @apiParamExample {json} Input
     * {
     *      "parentInt" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Category listed successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/specific-category-list
     * @apiErrorExample {json} Category List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Category List Function
    SpecificcategoryList(categoryid, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const categoryDataId = yield this.categoryService.findOne(categoryid);
            if (categoryDataId === undefined) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid categoryId',
                };
                return response.status(400).send(errorResponse);
            }
            const categoryDetailId = yield this.categoryPathService.findOne({ categoryId: categoryid, level: 0 });
            const select = ['categoryId', 'name', 'image', 'imagePath', 'parentInt', 'sortOrder', 'metaTagTitle', 'metaTagDescription', 'metaTagKeyword'];
            const categoryData = yield this.categoryService.list(0, 0, select, 0, 0, 0, 0);
            const categoryList = array_to_tree_1.default(categoryData, {
                parentProperty: 'parentInt',
                customID: 'categoryId',
            });
            const mainCategoryId = categoryDetailId.pathId;
            let dataList;
            const key = 'categoryId';
            for (const data of categoryList) {
                if (data[key] === mainCategoryId) {
                    dataList = data;
                }
            }
            const successResponse = {
                status: 1,
                message: 'Successfully get the related category List',
                data: dataList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Active product count API
    /**
     * @api {get} /api/list/product-count  Product Count API
     * @apiGroup Store List
     * @apiParam (Request body) {String} keyword keyword for search
     * @apiParam (Request body) {Number} manufacturerId manufacturerId
     * @apiParam (Request body) {Number} categoryId categoryId
     * @apiParam (Request body) {Number} priceFrom price from you want to list
     * @apiParam (Request body) {Number} priceTo price to you want to list
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get Product Count",
     *      "data":{
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/product-count
     * @apiErrorExample {json} product count error
     * HTTP/1.1 500 Internal Server Error
     */
    productCount(keyword, manufacturerId, categoryId, priceFrom, priceTo, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const maximum = ['Max(product.price) As maximumProductPrice'];
            const maximumPrice = yield this.productService.productMaxPrice(maximum);
            const productPrice = maximumPrice.maximumProductPrice;
            const productCount = yield this.productService.productCount(keyword, manufacturerId, categoryId, priceFrom, priceTo);
            const successResponse = {
                status: 1,
                message: 'Successfully get Product Count',
                data: { productCount: productCount.productCount,
                    maximumProductPrice: productPrice },
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/banner-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "bannerList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/category-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sortOrder')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Req()), tslib_1.__param(6, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "ParentCategoryList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/productlist'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('manufacturerId')), tslib_1.__param(4, routing_controllers_1.QueryParam('categoryId')), tslib_1.__param(5, routing_controllers_1.QueryParam('priceFrom')),
    tslib_1.__param(6, routing_controllers_1.QueryParam('priceTo')), tslib_1.__param(7, routing_controllers_1.QueryParam('price')), tslib_1.__param(8, routing_controllers_1.QueryParam('condition')), tslib_1.__param(9, routing_controllers_1.QueryParam('count')), tslib_1.__param(10, routing_controllers_1.Req()), tslib_1.__param(11, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, String, String, String, Number, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "productList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/custom-product-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('manufacturerId')), tslib_1.__param(4, routing_controllers_1.QueryParam('categoryId')), tslib_1.__param(5, routing_controllers_1.QueryParam('priceFrom')),
    tslib_1.__param(6, routing_controllers_1.QueryParam('priceTo')), tslib_1.__param(7, routing_controllers_1.QueryParam('price')), tslib_1.__param(8, routing_controllers_1.QueryParam('condition')), tslib_1.__param(9, routing_controllers_1.QueryParam('count')), tslib_1.__param(10, routing_controllers_1.Req()), tslib_1.__param(11, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Number, String, String, String, String, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "customProductList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/country-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "countryList", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/contact-us'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ContactRequest_1.ContactRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "userContact", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/zone-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "zonelist", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/specific-category-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('categoryId')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "SpecificcategoryList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/product-count'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(1, routing_controllers_1.QueryParam('manufacturerId')), tslib_1.__param(2, routing_controllers_1.QueryParam('categoryId')), tslib_1.__param(3, routing_controllers_1.QueryParam('priceFrom')), tslib_1.__param(4, routing_controllers_1.QueryParam('priceTo')), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Number, Number, Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "productCount", null);
CommonListController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/list'),
    tslib_1.__metadata("design:paramtypes", [BannerService_1.BannerService, CategoryService_1.CategoryService,
        ProductService_1.ProductService, ProductImageService_1.ProductImageService,
        CountryService_1.CountryService, ContactService_1.ContactService,
        EmailTemplateService_1.EmailTemplateService,
        zoneService_1.ZoneService,
        CustomerWishlistService_1.CustomerWishlistService,
        ProductToCategoryService_1.ProductToCategoryService, CategoryPathService_1.CategoryPathService, UserService_1.UserService])
], CommonListController);
exports.CommonListController = CommonListController;
//# sourceMappingURL=CommonListController.js.map