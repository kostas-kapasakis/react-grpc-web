import {ChatServiceService, IChatServiceServer} from "../proto/messages/chat_grpc_pb";
import {Message} from "../proto/messages/chat_pb";
import {ServerDuplexStream} from "grpc";


class MessagesHandler implements IChatServiceServer {

    chat = (call:ServerDuplexStream<Message, Message>) => {
        call.on('data', (chatMessage) => {
            let user =call.metadata.get('username');
            let msg= chatMessage.message;
            console.log(`${user} ==> ${msg}`);

                    call.write(
                        {
                            from: user,
                            message : msg
                        });

            });

        call.on('end', function() {
            call.write({
                fromName: 'Chat server',
                message : 'Nice to see ya! Come back again...'
            });
            call.end();
        });
    };
}

export default {
    service: ChatServiceService,
    handler: new MessagesHandler(),
};
