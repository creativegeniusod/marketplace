"use strict";
/*
 * spurtcommerce community API
 * version 3.0
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderController = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const class_transformer_1 = require("class-transformer");
const CustomerCheckoutRequest_1 = require("./requests/CustomerCheckoutRequest");
const OrderService_1 = require("../../services/OrderService");
const OrderProductService_1 = require("../../services/OrderProductService");
const OrderTotalService_1 = require("../../services/OrderTotalService");
const Order_1 = require("../../models/Order");
const OrderProduct_1 = require("../../models/OrderProduct");
const OrderTotal_1 = require("../../models/OrderTotal");
const mail_services_1 = require("../../../auth/mail.services");
const ProductService_1 = require("../../services/ProductService");
const ProductImageService_1 = require("../../services/ProductImageService");
const SettingService_1 = require("../../services/SettingService");
const EmailTemplateService_1 = require("../../services/EmailTemplateService");
const CountryService_1 = require("../../services/CountryService");
const UserService_1 = require("../../services/UserService");
let CustomerOrderController = class CustomerOrderController {
    constructor(orderService, orderProductService, orderTotalService, productService, productImageService, settingService, emailTemplateService, countryService, userService) {
        this.orderService = orderService;
        this.orderProductService = orderProductService;
        this.orderTotalService = orderTotalService;
        this.productService = productService;
        this.productImageService = productImageService;
        this.settingService = settingService;
        this.emailTemplateService = emailTemplateService;
        this.countryService = countryService;
        this.userService = userService;
    }
    // customer checkout
    /**
     * @api {post} /api/orders/customer-checkout Checkout
     * @apiGroup Store order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} productDetail Product Details
     * @apiParam (Request body) {String} shippingFirstName Shipping First name
     * @apiParam (Request body) {String} shippingLastName Shipping Last Name
     * @apiParam (Request body) {String} shippingCompany Shipping Company
     * @apiParam (Request body) {String} shippingAddress_1 Shipping Address 1
     * @apiParam (Request body) {String} shippingAddress_2 Shipping Address 2
     * @apiParam (Request body) {String} shippingCity Shipping City
     * @apiParam (Request body) {Number} shippingPostCode Shipping PostCode
     * @apiParam (Request body) {String} shippingCountry Shipping Country
     * @apiParam (Request body) {String} shippingZone Shipping Zone
     * @apiParam (Request body) {String} shippingAddressFormat Shipping Address Format
     * @apiparam (Request body) {Number} phoneNumber Customer Phone Number
     * @apiparam (Request body) {String} emailId Customer Email Id
     * @apiParamExample {json} Input
     * {
     *      "productDetail" :[
     *      {
     *      "productId" : "",
     *      "quantity" : "",
     *      "price" : "",
     *      "model" : "",
     *      "name" : "",
     *      "shippingFirstName" : "",
     *      "shippingLastName" : "",
     *      "shippingCompany" : "",
     *      "shippingAddress_1" : "",
     *      "shippingAddress_2" : "",
     *      "shippingCity" : "",
     *      "shippingPostCode" : "",
     *      "shippingCountry" : "",
     *      "shippingZone" : "",
     *      "shippingAddressFormat" : "",
     *      "phoneNumber" : "",
     *      "emailId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Check Out the product successfully And Send order detail in your mail ..!!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/orders/customer-checkout
     * @apiErrorExample {json} Checkout error
     * HTTP/1.1 500 Internal Server Error
     */
    // Customer Checkout Function
    customerCheckout(checkoutParam, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newOrder = new Order_1.Order();
            const newOrderTotal = new OrderTotal_1.OrderTotal();
            let orderProduct = [];
            let i;
            const errProd = [];
            const orderProducts = checkoutParam.productDetails;
            for (i = 0; i < orderProducts.length; i++) {
                const productValue = yield this.productService.findOne({ where: { productId: orderProducts[i].productId } });
                if (!productValue) {
                    errProd.push(1);
                }
            }
            if (errProd.length > 0) {
                const errResponse = {
                    status: 0,
                    message: 'Invalid product',
                };
                return response.status(400).send(errResponse);
            }
            let n;
            let totalProductAmount;
            let totalAmount = 0;
            const productDetailData = [];
            newOrder.customerId = request.user.id;
            newOrder.email = checkoutParam.emailId;
            newOrder.telephone = checkoutParam.phoneNumber;
            newOrder.shippingFirstname = checkoutParam.shippingFirstName;
            newOrder.shippingLastname = checkoutParam.shippingLastName;
            newOrder.shippingAddress1 = checkoutParam.shippingAddress_1;
            newOrder.shippingAddress2 = checkoutParam.shippingAddress_2;
            newOrder.shippingCompany = checkoutParam.shippingCompany;
            newOrder.shippingCity = checkoutParam.shippingCity;
            newOrder.shippingCountry = checkoutParam.shippingCountry;
            newOrder.shippingZone = checkoutParam.shippingZone;
            newOrder.shippingPostcode = checkoutParam.shippingPostCode;
            newOrder.shippingAddressFormat = checkoutParam.shippingAddressFormat;
            newOrder.paymentFirstname = checkoutParam.shippingFirstName;
            newOrder.paymentLastname = checkoutParam.shippingLastName;
            newOrder.paymentAddress1 = checkoutParam.shippingAddress_1;
            newOrder.paymentAddress2 = checkoutParam.shippingAddress_2;
            newOrder.paymentCompany = checkoutParam.shippingCompany;
            newOrder.paymentCity = checkoutParam.shippingCity;
            newOrder.paymentCountry = checkoutParam.shippingCountry;
            newOrder.paymentZone = checkoutParam.shippingZone;
            newOrder.paymentPostcode = checkoutParam.shippingPostCode;
            newOrder.isActive = 1;
            const setting = yield this.settingService.findOne();
            newOrder.orderStatusId = setting.orderStatus;
            newOrder.invoicePrefix = setting.invoicePrefix;
            newOrder.paymentAddressFormat = checkoutParam.shippingAddressFormat;
            const orderData = yield this.orderService.create(newOrder);
            const countryName = yield this.countryService.findOne(orderData.shippingCountry);
            orderData.shippingCountry = countryName ? countryName.name : '';
            orderProduct = checkoutParam.productDetails;
            for (i = 0; i < orderProduct.length; i++) {
                const productValue = yield this.productService.findOne({ where: { productId: orderProduct[i].productId } });
                const price = productValue.price;
                const productDetails = new OrderProduct_1.OrderProduct();
                productDetails.productId = orderProduct[i].productId;
                productDetails.name = productValue.name;
                productDetails.orderId = orderData.orderId;
                productDetails.quantity = orderProduct[i].quantity;
                productDetails.productPrice = price;
                productDetails.total = +orderProduct[i].quantity * +price;
                productDetails.model = productValue.name;
                const productInformation = yield this.orderProductService.createData(productDetails);
                const productImageData = yield this.productService.findOne(productInformation.productId);
                const productImageDetail = yield this.productImageService.findOne({ where: { productId: productInformation.productId } });
                productImageData.productInformationData = productInformation;
                productImageData.productImage = productImageDetail;
                totalProductAmount = yield this.orderProductService.findData(orderProduct[i].productId, orderData.orderId, productInformation.orderProductId);
                for (n = 0; n < totalProductAmount.length; n++) {
                    totalAmount += +totalProductAmount[n].total;
                }
                productDetailData.push(productImageData);
            }
            newOrder.total = totalAmount;
            newOrder.invoiceNo = 'INV00'.concat(orderData.orderId);
            const nowDate = new Date();
            const orderDate = nowDate.getFullYear() + ('0' + (nowDate.getMonth() + 1)).slice(-2) + ('0' + nowDate.getDate()).slice(-2);
            newOrder.orderPrefixId = setting.invoicePrefix.concat('-' + orderDate + orderData.orderId);
            const resultData = yield this.orderService.update(orderData.orderId, newOrder);
            newOrderTotal.orderId = orderData.orderId;
            newOrderTotal.value = totalAmount;
            yield this.orderTotalService.createOrderTotalData(newOrderTotal);
            const emailContent = yield this.emailTemplateService.findOne(5);
            const adminEmailContent = yield this.emailTemplateService.findOne(6);
            const today = ('0' + nowDate.getDate()).slice(-2) + '.' + ('0' + (nowDate.getMonth() + 1)).slice(-2) + '.' + nowDate.getFullYear();
            const customerFirstName = orderData.shippingFirstname;
            const customerLastName = orderData.shippingLastname;
            const customerName = customerFirstName + ' ' + customerLastName;
            const adminMessage = adminEmailContent.content.replace('{name}', customerName).replace('{orderId}', orderData.orderId);
            const customerMessage = emailContent.content.replace('{name}', customerName);
            const adminId = [];
            const adminUser = yield this.userService.findAll({ select: ['username'], where: { userGroupId: 1, deleteFlag: 0 } });
            for (const user of adminUser) {
                const val = user.username;
                adminId.push(val);
            }
            mail_services_1.MAILService.adminOrderMail(adminMessage, orderData, adminEmailContent.subject, productDetailData, today, adminId);
            mail_services_1.MAILService.customerOrderMail(customerMessage, orderData, emailContent.subject, productDetailData, today);
            const successResponse = {
                status: 1,
                message: 'You successfully checked out the product and order details send to your mail',
                data: resultData,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Customer Order List API
    /**
     * @api {get} /api/orders/order-list My Order List
     * @apiGroup Store order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully show the Order List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/orders/order-list
     * @apiErrorExample {json} Order List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Order List Function
    orderList(limit, offset, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const search = [
                {
                    name: 'customerId',
                    op: 'where',
                    value: request.user.id,
                },
            ];
            const whereConditions = 0;
            const select = ['orderId', 'customerId', 'orderStatus', 'total', 'createdDate', 'orderPrefixId'];
            const relation = ['orderStatus'];
            const OrderData = yield this.orderService.list(limit, offset, select, search, whereConditions, relation, count);
            if (count) {
                const Response = {
                    status: 1,
                    message: 'Successfully get Count. ',
                    data: OrderData,
                };
                return response.status(200).send(Response);
            }
            const promises = OrderData.map((results) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const Id = results.orderId;
                const countValue = yield this.orderProductService.findAndCount({ where: { orderId: Id } });
                results.items = countValue[1];
                return results;
            }));
            const result = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully shown the order list. ',
                data: class_transformer_1.classToPlain(result),
            };
            return response.status(200).send(successResponse);
        });
    }
    // Customer Order Detail API
    /**
     * @api {get} /api/orders/order-detail My OrderDetail
     * @apiGroup Store order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} orderId Order Id
     * @apiParamExample {json} Input
     * {
     *      "orderId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully show the Order Detail..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/orders/order-detail
     * @apiErrorExample {json} Order Detail error
     * HTTP/1.1 500 Internal Server Error
     */
    // Order Detail Function
    orderDetail(orderid, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderData = yield this.orderService.findOrder({
                where: { orderId: orderid, customerId: request.user.id },
                select: ['orderId', 'orderStatusId', 'orderPrefixId', 'customerId', 'invoiceNo', 'telephone', 'shippingFirstname', 'shippingLastname', 'shippingCompany', 'shippingAddress1',
                    'shippingAddress2', 'shippingCity', 'shippingZone', 'shippingPostcode', 'shippingCountry', 'shippingAddressFormat',
                    'paymentFirstname', 'paymentLastname', 'paymentCompany', 'paymentAddress1', 'paymentAddress2', 'paymentCity',
                    'paymentPostcode', 'paymentCountry', 'paymentZone', 'paymentAddressFormat', 'total', 'createdDate'],
            });
            if (!orderData) {
                const errResponse = {
                    status: 0,
                    message: 'Invalid order for this user',
                };
                return response.status(400).send(errResponse);
            }
            orderData.productList = yield this.orderProductService.find({
                where: { orderId: orderid },
                select: ['orderProductId', 'orderId', 'productId', 'name', 'model', 'quantity', 'total', 'productPrice'],
            }).then((val) => {
                console.log(val);
                const productVal = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const tempVal = value;
                    return tempVal;
                }));
                const results = Promise.all(productVal);
                return results;
            });
            const successResponse = {
                status: 1,
                message: 'Successfully shown the order Detail. ',
                data: orderData,
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/customer-checkout'),
    routing_controllers_1.Authorized('customer'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CustomerCheckoutRequest_1.CustomerCheckoutRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerOrderController.prototype, "customerCheckout", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/order-list'),
    routing_controllers_1.Authorized('customer'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('count')), tslib_1.__param(3, routing_controllers_1.Req()), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerOrderController.prototype, "orderList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/order-detail'),
    routing_controllers_1.Authorized('customer'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('orderId')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerOrderController.prototype, "orderDetail", null);
CustomerOrderController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/orders'),
    tslib_1.__metadata("design:paramtypes", [OrderService_1.OrderService, OrderProductService_1.OrderProductService, OrderTotalService_1.OrderTotalService,
        ProductService_1.ProductService, ProductImageService_1.ProductImageService, SettingService_1.SettingService,
        EmailTemplateService_1.EmailTemplateService,
        CountryService_1.CountryService, UserService_1.UserService])
], CustomerOrderController);
exports.CustomerOrderController = CustomerOrderController;
//# sourceMappingURL=CustomerOrderController.js.map