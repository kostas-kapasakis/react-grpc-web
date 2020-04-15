#Node grpc service


##Important links
1) https://grpc.io/docs/tutorials/basic/node/
2) https://github.com/grpc/grpc-node


##gRPC Node service steps

1) **npm run generate** to generate the proto stubs for node with typescript support
    - internally we are using the **grpc_tools_node_protoc_plugin** and **protoc-gen-ts plugins** to generate the typescript files.

2) Create handler for each proto file service.

3) Implement the service interface.

4) Create a grpc server and provide the services/handlers implementations


##Run the current project.

With Docker:

````
docker build -t node-server .

docker run -d -p 9090:9090 --name node-server node-server

````

Without Docker

````
npm run start
