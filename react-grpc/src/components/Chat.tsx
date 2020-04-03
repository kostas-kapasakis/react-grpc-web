import React, {ChangeEvent, useState} from 'react';
import {ChatServiceClient} from "../proto/chat_pb_service";
import grpc from 'grpc';
import {Message} from "../proto/chat_pb";
import {Button} from "@material-ui/core";

export default function ChatContainer() {
    let client: ChatServiceClient;
    const [message, setMessage] = useState('');

    const handleMessage = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleBidirectionalCalls = () => {
        client = new ChatServiceClient("http://localhost:8080");


        // const request = new Message();
        // if (message === "quit") {
        //     call.end();
        // } else {
        //     call.write({
        //         message : line
        //     });
        // }

        // const metadata = new grpc.Metadata();
        // metadata.add('username', "Kostas");
        // //const  call = client.chat(request);
        //
        //
        // call.on('data', (chatMessage) => {
        //     console.log(`${chatMessage.toObject().from} ==> ${chatMessage.toObject().message}`);
        // });
        // call.on('end', () => {
        //     console.log('Server ended call');
        // });

        // call.on("error", (e) => {
        //     console.log(e);
        // });


        return (
            <div>
                Chat Container
                <Button onClick={handleBidirectionalCalls}
                        variant="contained"
                        color="primary">
                    Send message
                </Button>
                <input type="text" value={message} onChange={handleMessage}/>
            </div>
        );

    }
};

