# React gRPC-WEB client

## Important links

1) https://github.com/grpc/grpc-web

## gRPC-WEB client set up steps.

1) Generate the client stubs by running  **npm run generate**
       
       Internally we are using the protoc compiler and the protoc-gen-ts plugin with the service=grpc-web parameter.

2) In order to use the stubs and call to the grpc backend we have to

    2.1) Create a client instance by providing the envoy proxy address.
    
    2.2) Create a request type and set any arguments
    
    2.3) Call the actual service method with the created arguments.

            #In unary requests we can just get the response by using response?.toObject()

            #In stream requests we have to follow the same steps and also set event listeners.

            Example:

                stream.on('data', (response) => {});

                stream.on('status',  (status) => {});

                stream.on('end', (metadata) =>  {});


## Debug current project

#### With Docker

````
docker build -t react-grpc .

docker run -d -p 3000:3000 --name react-grp react-grp

````

#### Without Docker

````
npm run start
````
