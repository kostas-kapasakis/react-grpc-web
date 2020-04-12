"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const grpc = __importStar(require("grpc"));
const accountsHandler_1 = __importDefault(require("./handlers/accountsHandler"));
const messagesHandler_1 = __importDefault(require("./handlers/messagesHandler"));
const startServer = () => {
    const server = new grpc.Server();
    const port = process.env.PORT;
    server.addService(accountsHandler_1.default.service, accountsHandler_1.default.handler);
    server.addService(messagesHandler_1.default.service, messagesHandler_1.default.handler);
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err != null) {
            return console.error(err);
        }
        console.log(`gRPC listening on ${port}`);
    });
    server.start();
};
startServer();
//# sourceMappingURL=server.js.map