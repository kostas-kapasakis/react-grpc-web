import {Account} from "../proto/accounts_pb";

export const GetAccountById = (id: number): Account => {
    const account = new Account();

    if (id === 1) {
        account.setId('1');
        account.setName('Test1');
        account.setNumber('456');
    } else {
        account.setId('2');
        account.setName('Test2');
        account.setNumber('123');
    }

    return account;
};


export const GetAllAccounts = (): Array<Account> => {
    const accounts: Array<Account> = [];

    for (let i = 0; i < 10; i++) {
        let acc = new Account();
        acc.setId(i.toString());
        acc.setName('Example version' + i);
        acc.setNumber('345634563456' + i);

        accounts.push(acc);
    }

    return accounts;
};