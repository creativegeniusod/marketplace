"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingsTable1546580970382 = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateSettingsTable1546580970382 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'settings',
                columns: [
                    {
                        name: 'settings_id',
                        type: 'int',
                        length: '11',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    }, {
                        name: 'url',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'meta_tag_title',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'meta_tag_description',
                        type: 'text',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'meta_tag_keywords',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_name',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_owner',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_address',
                        type: 'text',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'country_id',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'zone_id',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_email',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_telephone',
                        type: 'varchar',
                        length: '50',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_fax',
                        type: 'varchar',
                        length: '30',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_logo',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_logo_path',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'maintenance_mode',
                        type: 'int',
                        length: '3',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_language_name',
                        type: 'varchar',
                        length: '250',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'order_status',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                        default: 1,
                    }, {
                        name: 'store_currency_id',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_image',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'store_image_path',
                        type: 'text',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'facebook',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'twitter',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'instagram',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'google',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'invoice_prefix',
                        type: 'varchar',
                        length: '255',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'items_per_page',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'category_product_count',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'is_active',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'created_date',
                        type: 'datetime',
                        isPrimary: false,
                        isNullable: true,
                        default: 'CURRENT_TIMESTAMP',
                    }, {
                        name: 'modified_date',
                        type: 'datetime',
                        isPrimary: false,
                        isNullable: true,
                        default: 'CURRENT_TIMESTAMP',
                    }, {
                        name: 'created_by',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    }, {
                        name: 'modified_by',
                        type: 'int',
                        length: '11',
                        isPrimary: false,
                        isNullable: true,
                    },
                ],
            });
            const ifExsist = yield queryRunner.hasTable('settings');
            if (!ifExsist) {
                yield queryRunner.createTable(table);
            }
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('settings', true);
        });
    }
}
exports.CreateSettingsTable1546580970382 = CreateSettingsTable1546580970382;
//# sourceMappingURL=1546580970382-CreateSettingsTable.js.map