import 'dotenv/config';
import * as grpc from 'grpc';

import accountsHandler from './handlers/accountsHandler';
import messagesHandler from "./handlers/messagesHandler";


const startServer = () => {
    const server = new grpc.Server();
    const port = process.env.PORT;

    server.addService(accountsHandler.service, accountsHandler.handler);
    server.addService(messagesHandler.service, messagesHandler.handler);

    server.bindAsync(
        `0.0.0.0:${port}`,
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