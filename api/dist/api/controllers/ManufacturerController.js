"use strict";
/*
 * spurtcommerce community API
 * Copyright (c) 2022 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerController = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const AWS = tslib_1.__importStar(require("aws-sdk"));
const CreateManufacturerRequest_1 = require("./requests/CreateManufacturerRequest");
const ManufacturerModel_1 = require("../models/ManufacturerModel");
const ManufacturerService_1 = require("../services/ManufacturerService");
const env_1 = require("../../env");
const UpdateManufacturerRequest_1 = require("./requests/UpdateManufacturerRequest");
const DeleteManufacturerRequest_1 = require("./requests/DeleteManufacturerRequest");
const S3Service_1 = require("../services/S3Service");
const ImageService_1 = require("../services/ImageService");
// S3 SetUp
AWS.config.update({
    accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID,
    secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY,
    region: env_1.aws_setup.AWS_DEFAULT_REGION,
});
let ManufacturerController = class ManufacturerController {
    constructor(manufacturerService, s3Service, imageService) {
        this.manufacturerService = manufacturerService;
        this.s3Service = s3Service;
        this.imageService = imageService;
    }
    // Create Manufacturer API
    /**
     * @api {post} /api/manufacturer/create-manufacturer Create Manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Manufacturer name
     * @apiParam (Request body) {String} image Manufacturer image
     * @apiParam (Request body) {number} sortOrder Manufacturer sortOrder
     * @apiParam (Request body) {number} status status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "image" : "",
     *      "imagePath" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Manufacturer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/create-manufacturer
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    createManufacturer(manufacturer, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const image = manufacturer.image;
            if (image) {
                const path = 'manufacturer/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                let val;
                if (env_1.env.imageserver === 's3') {
                    val = yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    val = yield this.imageService.imageUpload((path + name), base64Data);
                }
                console.log(val);
                const newManufacturer = new ManufacturerModel_1.Manufacturer();
                newManufacturer.name = manufacturer.name;
                newManufacturer.image = name;
                newManufacturer.imagePath = path;
                newManufacturer.sortOrder = manufacturer.sortOrder;
                newManufacturer.isActive = manufacturer.status;
                yield this.manufacturerService.create(newManufacturer);
                const successResponse = {
                    status: 1,
                    message: 'Successfully created a new Brand.',
                    data: { name, path },
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Manufacturer List API
    /**
     * @api {get} /api/manufacturer/manufacturerlist Manufacturer List API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} status 0->active 1->inactive
     * @apiParam (Request body) {Number} count count in number
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get manufacturer list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/manufacturerlist
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    manufacturerList(limit, offset, keyword, status, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['manufacturerId', 'name', 'image', 'imagePath', 'sortOrder', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                }, {
                    name: 'isActive',
                    op: 'where',
                    value: status,
                },
            ];
            const WhereConditions = [];
            const manufacturerList = yield this.manufacturerService.list(limit, offset, select, search, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got the complete brand list.',
                data: manufacturerList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Update Manufacturer API
    /**
     * @api {put} /api/manufacturer/update-manufacturer/:id Update Manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} manufacturerId Manufacturer manufacturerId
     * @apiParam (Request body) {String} name Manufacturer name
     * @apiParam (Request body) {String} image Manufacturer image
     * @apiParam (Request body) {number} sortOrder Manufacturer sortOrder
     * @apiParam (Request body) {number} status Manufacturer status
     * @apiParamExample {json} Input
     * {
     *      "manufacturerId" : "",
     *      "name" : "",
     *      "image" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Manufacturer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/update-manufacturer/:id
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    updateManufacturer(manufacturerParam, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const manufacturer = yield this.manufacturerService.findOne({
                where: {
                    manufacturerId: manufacturerParam.manufacturerId,
                },
            });
            if (!manufacturer) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid manufacturerId',
                };
                return response.status(400).send(errorResponse);
            }
            const image = manufacturerParam.image;
            if (image) {
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const path = 'manufacturer/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                let val;
                if (env_1.env.imageserver === 's3') {
                    val = yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    val = yield this.imageService.imageUpload((path + name), base64Data);
                }
                console.log(val);
                manufacturer.image = name;
                manufacturer.imagePath = path;
            }
            manufacturer.name = manufacturerParam.name;
            manufacturer.sortOrder = manufacturerParam.sortOrder;
            manufacturer.isActive = manufacturerParam.status;
            const manufacturerSave = yield this.manufacturerService.create(manufacturer);
            if (manufacturerSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the Brand.',
                    data: manufacturerSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update Brand',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete single Manufacturer API
    /**
     * @api {delete} /api/manufacturer/delete-manufacturer/:id Delete Manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "manufacturerId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Manufacturer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/delete-manufacturer/:id
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteManufacturer(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ManufacturerData = yield this.manufacturerService.findOne({
                where: {
                    manufacturerId: id,
                },
            });
            if (!ManufacturerData) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid manufacturerId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteManufacturer = yield this.manufacturerService.delete(ManufacturerData.manufacturerId);
            if (!deleteManufacturer) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the Brand. ',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete manufacturer',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Multiple Manufacturer API
    /**
     * @api {post} /api/manufacturer/delete-manufacturer Delete Multiple manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} manufacturerId  manufacturerId
     * @apiParamExample {json} Input
     * {
     * "manufacturerId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     * "message": "Successfully deleted manufacturer.",
     * "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/delete-manufacturer
     * @apiErrorExample {json} manufacturerDelete error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteMultipleManufacturer(deleteManufacturer, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const manufacturerIdNo = deleteManufacturer.manufacturerId.toString();
            const manufacturerid = manufacturerIdNo.split(',');
            for (const id of manufacturerid) {
                const dataId = yield this.manufacturerService.findOne(id);
                if (dataId === undefined) {
                    const errorResponse = {
                        status: 0,
                        message: 'Invalid manufacturerId',
                    };
                    return response.status(400).send(errorResponse);
                }
                else {
                    const deleteManufacturerId = parseInt(id, 10);
                    yield this.manufacturerService.delete(deleteManufacturerId);
                }
            }
            const successResponse = {
                status: 1,
                message: 'Successfully deleted manufacturer',
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/create-manufacturer'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManufacturerRequest_1.CreateManufacturer, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "createManufacturer", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/manufacturerlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('status')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "manufacturerList", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-manufacturer/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UpdateManufacturerRequest_1.UpdateManufacturer, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "updateManufacturer", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-manufacturer/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "deleteManufacturer", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/delete-manufacturer'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [DeleteManufacturerRequest_1.DeleteManufacturer, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "deleteMultipleManufacturer", null);
ManufacturerController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/manufacturer'),
    tslib_1.__metadata("design:paramtypes", [ManufacturerService_1.ManufacturerService, S3Service_1.S3Service,
        ImageService_1.ImageService])
], ManufacturerController);
exports.ManufacturerController = ManufacturerController;
//# sourceMappingURL=ManufacturerController.js.map