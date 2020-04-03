import {Account} from "../proto/accounts/accounts_pb";

export const GetAccountById = (id: number): Account => {
    const account = new Account();

    if (id === 1) {
        account.setId('1');
        account.setName('Kostas');
        account.setNumber('456');
    } else {
        account.setId('2');
        account.setName('Mao');
        account.setNumber('123');
    }

    return account;
};


export const GetAllAccounts = (): Array<Account> => {
    const accounts: Array<Account> = [];

    for (let i = 0; i < 10; i++) {
        let acc = new Account();
        acc.setId(i.toString());
        acc.setName('kostas version' + i);
        acc.setNumber('345634563456' + i);

        accounts.push(acc);
    }

    return accounts;
};