// package: messages
// file: chat.proto

import * as chat_pb from "./chat_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServicechat = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof chat_pb.Message;
  readonly responseType: typeof chat_pb.Message;
};

type ChatServicesend = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof chat_pb.Message;
  readonly responseType: typeof chat_pb.Message;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly chat: ChatServicechat;
  static readonly send: ChatServicesend;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  chat(metadata?: grpc.Metadata): BidirectionalStream<chat_pb.Message, chat_pb.Message>;
  send(
    requestMessage: chat_pb.Message,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Message|null) => void
  ): UnaryResponse;
  send(
    requestMessage: chat_pb.Message,
    callback: (error: ServiceError|null, responseMessage: chat_pb.Message|null) => void
  ): UnaryResponse;
}

