// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_pb = require('./accounts_pb.js');

function serialize_accounts_AccountsChange(arg) {
  if (!(arg instanceof accounts_pb.AccountsChange)) {
    throw new Error('Expected argument of type accounts.AccountsChange');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_AccountsChange(buffer_arg) {
  return accounts_pb.AccountsChange.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_AllAccountsResponse(arg) {
  if (!(arg instanceof accounts_pb.AllAccountsResponse)) {
    throw new Error('Expected argument of type accounts.AllAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_AllAccountsResponse(buffer_arg) {
  return accounts_pb.AllAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_AppRegistrationForAccounts(arg) {
  if (!(arg instanceof accounts_pb.AppRegistrationForAccounts)) {
    throw new Error('Expected argument of type accounts.AppRegistrationForAccounts');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_AppRegistrationForAccounts(buffer_arg) {
  return accounts_pb.AppRegistrationForAccounts.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_GetAccountRequest(arg) {
  if (!(arg instanceof accounts_pb.GetAccountRequest)) {
    throw new Error('Expected argument of type accounts.GetAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_GetAccountRequest(buffer_arg) {
  return accounts_pb.GetAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_GetAccountResponse(arg) {
  if (!(arg instanceof accounts_pb.GetAccountResponse)) {
    throw new Error('Expected argument of type accounts.GetAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_GetAccountResponse(buffer_arg) {
  return accounts_pb.GetAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_accounts_GetAllAccountRequest(arg) {
  if (!(arg instanceof accounts_pb.GetAllAccountRequest)) {
    throw new Error('Expected argument of type accounts.GetAllAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_accounts_GetAllAccountRequest(buffer_arg) {
  return accounts_pb.GetAllAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  getAccountById: {
    path: '/accounts.AccountService/GetAccountById',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.GetAccountRequest,
    responseType: accounts_pb.GetAccountResponse,
    requestSerialize: serialize_accounts_GetAccountRequest,
    requestDeserialize: deserialize_accounts_GetAccountRequest,
    responseSerialize: serialize_accounts_GetAccountResponse,
    responseDeserialize: deserialize_accounts_GetAccountResponse,
  },
  getAllAccounts: {
    path: '/accounts.AccountService/GetAllAccounts',
    requestStream: false,
    responseStream: false,
    requestType: accounts_pb.GetAllAccountRequest,
    responseType: accounts_pb.AllAccountsResponse,
    requestSerialize: serialize_accounts_GetAllAccountRequest,
    requestDeserialize: deserialize_accounts_GetAllAccountRequest,
    responseSerialize: serialize_accounts_AllAccountsResponse,
    responseDeserialize: deserialize_accounts_AllAccountsResponse,
  },
  registerForAccountsChanges: {
    path: '/accounts.AccountService/RegisterForAccountsChanges',
    requestStream: false,
    responseStream: true,
    requestType: accounts_pb.AppRegistrationForAccounts,
    responseType: accounts_pb.AccountsChange,
    requestSerialize: serialize_accounts_AppRegistrationForAccounts,
    requestDeserialize: deserialize_accounts_AppRegistrationForAccounts,
    responseSerialize: serialize_accounts_AccountsChange,
    responseDeserialize: deserialize_accounts_AccountsChange,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
