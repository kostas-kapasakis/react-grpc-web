# Envoy proxy image

## Valuable links
1) https://www.envoyproxy.io/
2) https://blog.markvincze.com/how-to-use-envoy-as-a-load-balancer-in-kubernetes/

## Definition
Envoy is a high performance C++ distributed proxy designed for single services and applications,
as well as a communication bus and “universal data plane” designed for large microservice “service mesh” architectures.

gRPC-Web clients connect to gRPC services via a special gateway proxy: the current version of the library uses Envoy by default,
in which gRPC-Web support is built-in.

-Basically envoy proxy will convert the http1.1 requests to http/2 grpc requests and will forward them to our
grpc node service


## Debug

In case you want to debug current project separately:

CD inside the envoy directory and build and run the envoy image by linking it with the backend.This has as
a prerequisite that the node server  image is running in 9090 with docker name = node-server.

Also please verify that the name you choose for the node back-end must be the same in the envoy.yaml - line 44

````yaml
    hosts: [{ socket_address: { address: node-grpc, port_value: 9090 }}]
````

### Docker set up steps

````
 docker build -t envoy .

 docker run -d -p 8080:8080 --link node-server:node-server envoy

 docker stats <container-id>
