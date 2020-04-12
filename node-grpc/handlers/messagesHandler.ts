import {ChatServiceService, IChatServiceServer} from "../proto/chat_grpc_pb";
import {Message} from "../proto/chat_pb";
import {sendUnaryData, ServerDuplexStream, ServerUnaryCall} from "grpc";

let users:Array<ServerDuplexStream<Message, Message>> = [];

class MessagesHandler implements IChatServiceServer {

    chat = (call:ServerDuplexStream<Message, Message>) => {
        users.push(call);

        const joinMessage = new Message();
        joinMessage.setFrom("Server");
        joinMessage.setMessage("New user joined");

        users.forEach(user => {
            user.write(joinMessage);
        });
    };

    send(call: ServerUnaryCall<Message>, callback: sendUnaryData<Message>): void {
        users.forEach(user => {
            user.write(call.request);
        });

    }
}

export default {
    service: ChatServiceService,
    handler: new MessagesHandler(),
};
