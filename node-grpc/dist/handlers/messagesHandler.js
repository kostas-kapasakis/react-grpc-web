"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chat_grpc_pb_1 = require("../proto/chat_grpc_pb");
const chat_pb_1 = require("../proto/chat_pb");
let users = [];
class MessagesHandler {
    constructor() {
        this.chat = (call) => {
            users.push(call);
            const joinMessage = new chat_pb_1.Message();
            joinMessage.setFrom("Server");
            joinMessage.setMessage("New user joined");
            users.forEach(user => {
                user.write(joinMessage);
            });
        };
    }
    send(call, callback) {
        users.forEach(user => {
            user.write(call.request);
        });
    }
}
exports.default = {
    service: chat_grpc_pb_1.ChatServiceService,
    handler: new MessagesHandler(),
};
//# sourceMappingURL=messagesHandler.js.map