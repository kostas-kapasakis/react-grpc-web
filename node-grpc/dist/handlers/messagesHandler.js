"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chat_grpc_pb_1 = require("../proto/messages/chat_grpc_pb");
class MessagesHandler {
    constructor() {
        this.chat = (call) => {
            call.on('data', (chatMessage) => {
                let user = call.metadata.get('username');
                let msg = chatMessage.message;
                console.log(`${user} ==> ${msg}`);
                call.write({
                    from: user,
                    message: msg
                });
            });
            call.on('end', function () {
                call.write({
                    fromName: 'Chat server',
                    message: 'Nice to see ya! Come back again...'
                });
                call.end();
            });
        };
    }
}
exports.default = {
    service: chat_grpc_pb_1.ChatServiceService,
    handler: new MessagesHandler(),
};
//# sourceMappingURL=messagesHandler.js.map