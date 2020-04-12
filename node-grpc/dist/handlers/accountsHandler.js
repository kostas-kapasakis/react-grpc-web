"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accountsRepository_1 = require("../repository/accountsRepository");
const accounts_grpc_pb_1 = require("../proto/accounts_grpc_pb");
const accounts_pb_1 = require("../proto/accounts_pb");
class AccountsHandler {
    constructor() {
        this.getAccountById = (req, response) => {
            const reply = new accounts_pb_1.GetAccountResponse();
            const id = req.request.getId();
            const account = accountsRepository_1.GetAccountById(id);
            reply.setAccount(account);
            response(null, reply);
        };
        this.getAllAccounts = (req, response) => {
            const reply = new accounts_pb_1.AllAccountsResponse();
            const accounts = accountsRepository_1.GetAllAccounts();
            reply.setAccountsList(accounts);
            response(null, reply);
        };
        this.registerForAccountsChanges = (request) => {
            const clientIp = request.getPeer();
            console.log(`connected with ${clientIp}`);
            for (let i = 0; i < 10; i++) {
                let response = new accounts_pb_1.AccountsChange();
                let account = new accounts_pb_1.Account();
                account.setId(i.toString());
                account.setName('example-' + i);
                account.setNumber('example-number' + i);
                response.setAccount(account);
                setInterval(() => request.write(response, null), 1000);
            }
            setInterval(() => request.end(), 12000);
        };
    }
}
exports.default = {
    service: accounts_grpc_pb_1.AccountServiceService,
    handler: new AccountsHandler(),
};
//# sourceMappingURL=accountsHandler.js.map