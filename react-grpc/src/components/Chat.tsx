import React, {ChangeEvent, useEffect, useState} from 'react';
import {ChatServiceClient} from "../proto/chat_pb_service";
import {Message} from "../proto/chat_pb";
import {Button, TextField} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {v4} from 'uuid';

const useStyles = makeStyles((theme: Theme) => ({
    messageContainer:{
        maxWidth:"35%",
    },
    messageList:{
        minHeight:"500px",
        maxWidth:"700px",
        backgroundColor:"aliceblue",
        border:"1px solid gray"
    },
    sendMessageBtn:{
        marginLeft:"20px",
        float:"right",
        marginTop:"13px"
    },
    messageInput: {
        width:"60%"
    }
}));


export default function ChatContainer() {
    let client: ChatServiceClient;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Array<string>>([]);
    const [user, setUser] = useState<string>(v4());

    const classes = useStyles();

    useEffect(() => { listenForMessages();},[]);

    const handleMessage = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        client = new ChatServiceClient("http://localhost:8080");
        const request = new Message();

        request.setFrom(user);
        request.setMessage(message);
        client.send(request, ()=>{});
    };

    const listenForMessages = () => {
        client = new ChatServiceClient("http://localhost:8080");

        const request = new Message();
        request.setFrom(user);
        request.setMessage(message);
        const stream = client.chat().write(request);

        stream.on('data', (chatMessage) => {
            setMessages(messages => messages.concat([`${chatMessage.toObject().from} ==> ${chatMessage.toObject().message}`]));
        });
        stream.on('end', () => {
            setMessages(messages => messages.concat(["Server stream was forced to close"]));
        });
    }

    return (
            <>
                <div className={classes.messageContainer}>
                    <h3>Messages</h3>
                     <div className={classes.messageList}>
                         {messages.map(msg => <p>{msg}</p>)}
                     </div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Type your message"
                        multiline
                        rowsMax="4"
                        value={message}
                        className={classes.messageInput}
                        onChange={handleMessage}
                    />
                    <Button className={classes.sendMessageBtn} onClick={handleSendMessage}
                            variant="contained"
                            color="primary">
                        Send message
                    </Button>
                </div>

            </>
        );
};

