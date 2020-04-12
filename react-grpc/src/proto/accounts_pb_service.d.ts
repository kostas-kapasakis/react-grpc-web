// package: accounts
// file: accounts.proto

import * as accounts_pb from "./accounts_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AccountServiceGetAccountById = {
  readonly methodName: string;
  readonly service: typeof AccountService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof accounts_pb.GetAccountRequest;
  readonly responseType: typeof accounts_pb.GetAccountResponse;
};

type AccountServiceGetAllAccounts = {
  readonly methodName: string;
  readonly service: typeof AccountService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof accounts_pb.GetAllAccountRequest;
  readonly responseType: typeof accounts_pb.AllAccountsResponse;
};

type AccountServiceRegisterForAccountsChanges = {
  readonly methodName: string;
  readonly service: typeof AccountService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof accounts_pb.AppRegistrationForAccounts;
  readonly responseType: typeof accounts_pb.AccountsChange;
};

export class AccountService {
  static readonly serviceName: string;
  static readonly GetAccountById: AccountServiceGetAccountById;
  static readonly GetAllAccounts: AccountServiceGetAllAccounts;
  static readonly RegisterForAccountsChanges: AccountServiceRegisterForAccountsChanges;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AccountServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAccountById(
    requestMessage: accounts_pb.GetAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: accounts_pb.GetAccountResponse|null) => void
  ): UnaryResponse;
  getAccountById(
    requestMessage: accounts_pb.GetAccountRequest,
    callback: (error: ServiceError|null, responseMessage: accounts_pb.GetAccountResponse|null) => void
  ): UnaryResponse;
  getAllAccounts(
    requestMessage: accounts_pb.GetAllAccountRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: accounts_pb.AllAccountsResponse|null) => void
  ): UnaryResponse;
  getAllAccounts(
    requestMessage: accounts_pb.GetAllAccountRequest,
    callback: (error: ServiceError|null, responseMessage: accounts_pb.AllAccountsResponse|null) => void
  ): UnaryResponse;
  registerForAccountsChanges(requestMessage: accounts_pb.AppRegistrationForAccounts, metadata?: grpc.Metadata): ResponseStream<accounts_pb.AccountsChange>;
}

