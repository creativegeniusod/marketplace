"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const tslib_1 = require("tslib");
const User_1 = require("../../api/models/User");
class CreateUser {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const user = new User_1.User();
            user.userId = 1;
            user.username = 'admin@spurtcart.com';
            user.password = yield User_1.User.hashPassword('cart123@');
            user.email = 'admin@spurtcart.com';
            user.userGroupId = 1;
            return yield em.save(user);
        });
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map