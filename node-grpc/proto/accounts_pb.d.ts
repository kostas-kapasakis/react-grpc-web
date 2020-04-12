// package: accounts
// file: accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Account extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getNumber(): string;
    setNumber(value: string): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Account.AsObject;
    static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Account;
    static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
    export type AsObject = {
        id: string,
        number: string,
        name: string,
    }
}

export class GetAllAccountRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllAccountRequest): GetAllAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllAccountRequest;
    static deserializeBinaryFromReader(message: GetAllAccountRequest, reader: jspb.BinaryReader): GetAllAccountRequest;
}

export namespace GetAllAccountRequest {
    export type AsObject = {
    }
}

export class AllAccountsResponse extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<Account>;
    setAccountsList(value: Array<Account>): void;
    addAccounts(value?: Account, index?: number): Account;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllAccountsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllAccountsResponse): AllAccountsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllAccountsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllAccountsResponse;
    static deserializeBinaryFromReader(message: AllAccountsResponse, reader: jspb.BinaryReader): AllAccountsResponse;
}

export namespace AllAccountsResponse {
    export type AsObject = {
        accountsList: Array<Account.AsObject>,
    }
}

export class GetAccountResponse extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
    static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
    export type AsObject = {
        account?: Account.AsObject,
    }
}

export class GetAccountRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
    static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
    export type AsObject = {
        id: number,
    }
}

export class AppRegistrationForAccounts extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppRegistrationForAccounts.AsObject;
    static toObject(includeInstance: boolean, msg: AppRegistrationForAccounts): AppRegistrationForAccounts.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppRegistrationForAccounts, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppRegistrationForAccounts;
    static deserializeBinaryFromReader(message: AppRegistrationForAccounts, reader: jspb.BinaryReader): AppRegistrationForAccounts;
}

export namespace AppRegistrationForAccounts {
    export type AsObject = {
        id: string,
    }
}

export class AccountsChange extends jspb.Message { 

    hasAccount(): boolean;
    clearAccount(): void;
    getAccount(): Account | undefined;
    setAccount(value?: Account): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountsChange.AsObject;
    static toObject(includeInstance: boolean, msg: AccountsChange): AccountsChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountsChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountsChange;
    static deserializeBinaryFromReader(message: AccountsChange, reader: jspb.BinaryReader): AccountsChange;
}

export namespace AccountsChange {
    export type AsObject = {
        account?: Account.AsObject,
    }
}
