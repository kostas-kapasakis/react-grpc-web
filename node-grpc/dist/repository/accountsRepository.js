"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_pb_1 = require("../proto/accounts/accounts_pb");
exports.GetAccountById = (id) => {
    const account = new accounts_pb_1.Account();
    if (id === 1) {
        account.setId('1');
        account.setName('Kostas');
        account.setNumber('456');
    }
    else {
        account.setId('2');
        account.setName('Mao');
        account.setNumber('123');
    }
    return account;
};
exports.GetAllAccounts = () => {
    const accounts = [];
    for (let i = 0; i < 10; i++) {
        let acc = new accounts_pb_1.Account();
        acc.setId(i.toString());
        acc.setName('kostas version' + i);
        acc.setNumber('345634563456' + i);
        accounts.push(acc);
    }
    return accounts;
};
//# sourceMappingURL=accountsRepository.js.map