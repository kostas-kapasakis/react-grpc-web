// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('grpc');
var chat_pb = require('./chat_pb.js');
function serialize_messages_Message(arg) {
    if (!(arg instanceof chat_pb.Message)) {
        throw new Error('Expected argument of type messages.Message');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_messages_Message(buffer_arg) {
    return chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}
var ChatServiceService = exports.ChatServiceService = {
    chat: {
        path: '/messages.ChatService/chat',
        requestStream: true,
        responseStream: true,
        requestType: chat_pb.Message,
        responseType: chat_pb.Message,
        requestSerialize: serialize_messages_Message,
        requestDeserialize: deserialize_messages_Message,
        responseSerialize: serialize_messages_Message,
        responseDeserialize: deserialize_messages_Message,
    },
    send: {
        path: '/messages.ChatService/send',
        requestStream: false,
        responseStream: false,
        requestType: chat_pb.Message,
        responseType: chat_pb.Message,
        requestSerialize: serialize_messages_Message,
        requestDeserialize: deserialize_messages_Message,
        responseSerialize: serialize_messages_Message,
        responseDeserialize: deserialize_messages_Message,
    },
};
exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
//# sourceMappingURL=chat_grpc_pb.js.map