import * as grpc from 'grpc';
import {ServerWritableStream} from 'grpc';
import {
    Account,
    AccountsChange,
    AllAccountsResponse,
    AppRegistrationForAccounts,
    GetAccountRequest,
    GetAccountResponse,
    GetAllAccountRequest,
} from '../proto/accounts/accounts_pb';
import {AccountServiceService, IAccountServiceServer} from '../proto/accounts/accounts_grpc_pb';
import {GetAccountById, GetAllAccounts} from "../repository/accountsRepository";

class AccountsHandler implements IAccountServiceServer {

    getAccountById = (req: grpc.ServerUnaryCall<GetAccountRequest>, response: grpc.sendUnaryData<GetAccountResponse>) => {
        const reply: GetAccountResponse = new GetAccountResponse();

        const id = req.request.getId();

        const account = GetAccountById(id);

        reply.setAccount(account);

        response(null, reply);
    };

    getAllAccounts = (req: grpc.ServerUnaryCall<GetAllAccountRequest>, response: grpc.sendUnaryData<AllAccountsResponse>) => {
        const reply = new AllAccountsResponse();

        const accounts = GetAllAccounts();

        reply.setAccountsList(accounts);

        response(null, reply);
    };

    registerForAccountsChanges = (request: ServerWritableStream<AppRegistrationForAccounts>) => {

        const clientIp = request.getPeer();

        console.log(`connected with ${clientIp}`);

        for (let i = 0; i < 10; i++) {
            let response = new AccountsChange();
            let account = new Account();
            account.setId(i.toString());
            account.setName('example-' + i);
            account.setNumber('example-number' + i);
            response.setAccount(account);
            setInterval(() => request.write(response, null), 1000);
        }

        setInterval(() =>   request.end(), 12000);

    }
}


export default {
    service: AccountServiceService,
    handler: new AccountsHandler(),
};
