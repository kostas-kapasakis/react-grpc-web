// package: accounts
/* eslint-disable */
// file: accounts.proto

var accounts_pb = require("./accounts_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AccountService = (function () {
  function AccountService() {}
  AccountService.serviceName = "accounts.AccountService";
  return AccountService;
}());

AccountService.GetAccountById = {
  methodName: "GetAccountById",
  service: AccountService,
  requestStream: false,
  responseStream: false,
  requestType: accounts_pb.GetAccountRequest,
  responseType: accounts_pb.GetAccountResponse
};

AccountService.GetAllAccounts = {
  methodName: "GetAllAccounts",
  service: AccountService,
  requestStream: false,
  responseStream: false,
  requestType: accounts_pb.GetAllAccountRequest,
  responseType: accounts_pb.AllAccountsResponse
};

AccountService.RegisterForAccountsChanges = {
  methodName: "RegisterForAccountsChanges",
  service: AccountService,
  requestStream: false,
  responseStream: true,
  requestType: accounts_pb.AppRegistrationForAccounts,
  responseType: accounts_pb.AccountsChange
};

exports.AccountService = AccountService;

function AccountServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AccountServiceClient.prototype.getAccountById = function getAccountById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccountService.GetAccountById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AccountServiceClient.prototype.getAllAccounts = function getAllAccounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccountService.GetAllAccounts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AccountServiceClient.prototype.registerForAccountsChanges = function registerForAccountsChanges(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AccountService.RegisterForAccountsChanges, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.AccountServiceClient = AccountServiceClient;

