// package: accounts
// file: accounts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as accounts_pb from "./accounts_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAccountById: IAccountServiceService_IGetAccountById;
    getAllAccounts: IAccountServiceService_IGetAllAccounts;
    registerForAccountsChanges: IAccountServiceService_IRegisterForAccountsChanges;
}

interface IAccountServiceService_IGetAccountById extends grpc.MethodDefinition<accounts_pb.GetAccountRequest, accounts_pb.GetAccountResponse> {
    path: string; // "/accounts.AccountService/GetAccountById"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<accounts_pb.GetAccountRequest>;
    requestDeserialize: grpc.deserialize<accounts_pb.GetAccountRequest>;
    responseSerialize: grpc.serialize<accounts_pb.GetAccountResponse>;
    responseDeserialize: grpc.deserialize<accounts_pb.GetAccountResponse>;
}
interface IAccountServiceService_IGetAllAccounts extends grpc.MethodDefinition<accounts_pb.GetAllAccountRequest, accounts_pb.AllAccountsResponse> {
    path: string; // "/accounts.AccountService/GetAllAccounts"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<accounts_pb.GetAllAccountRequest>;
    requestDeserialize: grpc.deserialize<accounts_pb.GetAllAccountRequest>;
    responseSerialize: grpc.serialize<accounts_pb.AllAccountsResponse>;
    responseDeserialize: grpc.deserialize<accounts_pb.AllAccountsResponse>;
}
interface IAccountServiceService_IRegisterForAccountsChanges extends grpc.MethodDefinition<accounts_pb.AppRegistrationForAccounts, accounts_pb.AccountsChange> {
    path: string; // "/accounts.AccountService/RegisterForAccountsChanges"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<accounts_pb.AppRegistrationForAccounts>;
    requestDeserialize: grpc.deserialize<accounts_pb.AppRegistrationForAccounts>;
    responseSerialize: grpc.serialize<accounts_pb.AccountsChange>;
    responseDeserialize: grpc.deserialize<accounts_pb.AccountsChange>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer {
    getAccountById: grpc.handleUnaryCall<accounts_pb.GetAccountRequest, accounts_pb.GetAccountResponse>;
    getAllAccounts: grpc.handleUnaryCall<accounts_pb.GetAllAccountRequest, accounts_pb.AllAccountsResponse>;
    registerForAccountsChanges: grpc.handleServerStreamingCall<accounts_pb.AppRegistrationForAccounts, accounts_pb.AccountsChange>;
}

export interface IAccountServiceClient {
    getAccountById(request: accounts_pb.GetAccountRequest, callback: (error: grpc.ServiceError | null, response: accounts_pb.GetAccountResponse) => void): grpc.ClientUnaryCall;
    getAccountById(request: accounts_pb.GetAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_pb.GetAccountResponse) => void): grpc.ClientUnaryCall;
    getAccountById(request: accounts_pb.GetAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_pb.GetAccountResponse) => void): grpc.ClientUnaryCall;
    getAllAccounts(request: accounts_pb.GetAllAccountRequest, callback: (error: grpc.ServiceError | null, response: accounts_pb.AllAccountsResponse) => void): grpc.ClientUnaryCall;
    getAllAccounts(request: accounts_pb.GetAllAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_pb.AllAccountsResponse) => void): grpc.ClientUnaryCall;
    getAllAccounts(request: accounts_pb.GetAllAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_pb.AllAccountsResponse) => void): grpc.ClientUnaryCall;
    registerForAccountsChanges(request: accounts_pb.AppRegistrationForAccounts, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<accounts_pb.AccountsChange>;
    registerForAccountsChanges(request: accounts_pb.AppRegistrationForAccounts, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<accounts_pb.AccountsChange>;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAccountById(request: accounts_pb.GetAccountRequest, callback: (error: grpc.ServiceError | null, response: accounts_pb.GetAccountResponse) => void): grpc.ClientUnaryCall;
    public getAccountById(request: accounts_pb.GetAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_pb.GetAccountResponse) => void): grpc.ClientUnaryCall;
    public getAccountById(request: accounts_pb.GetAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_pb.GetAccountResponse) => void): grpc.ClientUnaryCall;
    public getAllAccounts(request: accounts_pb.GetAllAccountRequest, callback: (error: grpc.ServiceError | null, response: accounts_pb.AllAccountsResponse) => void): grpc.ClientUnaryCall;
    public getAllAccounts(request: accounts_pb.GetAllAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: accounts_pb.AllAccountsResponse) => void): grpc.ClientUnaryCall;
    public getAllAccounts(request: accounts_pb.GetAllAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: accounts_pb.AllAccountsResponse) => void): grpc.ClientUnaryCall;
    public registerForAccountsChanges(request: accounts_pb.AppRegistrationForAccounts, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<accounts_pb.AccountsChange>;
    public registerForAccountsChanges(request: accounts_pb.AppRegistrationForAccounts, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<accounts_pb.AccountsChange>;
}
