import 'dotenv/config';
import * as grpc from 'grpc';

import {protoIndex} from './proto';
import accountsHandler from './handlers/accountsHandler';
import messagesHandler from "./handlers/messagesHandler";
protoIndex();


const startServer = () => {
    const server = new grpc.Server();

    server.addService(accountsHandler.service, accountsHandler.handler);
    server.addService(messagesHandler.service, messagesHandler.handler);

    server.bindAsync(
        `0.0.0.0:9090`,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${port}`);
        },
    );

    server.start();
};


startServer();