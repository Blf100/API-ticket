"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name, cpf = _a.cpf, email = _a.email, city = _a.city, uf = _a.uf, sex = _a.sex, created_at = _a.created_at, tickets_user = _a.tickets_user;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.city = city;
        this.uf = uf;
        this.sex = sex;
        this.created_at = created_at;
        this.tickets_user = tickets_user;
    }
    return User;
}());
exports.User = User;
