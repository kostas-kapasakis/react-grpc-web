#  gRPC - WEB (Node - React - Envoy)

Proof of concept project for gRPC-WEB . Technologies used  : NodeJS, React, Envoy, Typescript, Docker

## Docker images set up

Use bellow command to build and run all images.
````bash
docker-compose up
````

## Usage

1) Navigate to localhost:3000 to navigate to the client.
2) Use [BloomRPC](https://github.com/uw-labs/bloomrpc) to test the node-grpc service by adding the
proto files and use the 9090 port in which node-grpc service is running
3) Envoy proxy is running at 8080.
4) If you want to make any changes to the proto files , dont forget to re-run to both react and node project
the command npm run generate.Then re-build and run the images.
