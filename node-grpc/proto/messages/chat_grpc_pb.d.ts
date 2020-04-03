// package: messages
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_pb from "./chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    chat: IChatServiceService_Ichat;
}

interface IChatServiceService_Ichat extends grpc.MethodDefinition<chat_pb.Message, chat_pb.Message> {
    path: string; // "/messages.ChatService/chat"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<chat_pb.Message>;
    requestDeserialize: grpc.deserialize<chat_pb.Message>;
    responseSerialize: grpc.serialize<chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_pb.Message>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    chat: grpc.handleBidiStreamingCall<chat_pb.Message, chat_pb.Message>;
}

export interface IChatServiceClient {
    chat(): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    chat(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    chat(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public chat(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
    public chat(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<chat_pb.Message, chat_pb.Message>;
}
