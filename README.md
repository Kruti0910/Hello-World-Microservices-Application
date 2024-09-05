Project Structure:

This project demonstrates a microservices architecture with three services:
hello-service
Endpoint: /hello
Description: Returns the message "hello".

world-service
Endpoint: /world
Description: Returns the message "world".

integration-service
Endpoint: /
Description: Calls both Hello and World services and returns "hello world".

Steps: 

1) Setup and Running Locally
1.1 Clone the repository:
git clone <repo-url>
cd Hello World

1.2 Install dependencies: Run npm install in each service directory: hello-service, world-service, and integration-service.

1.3 Test services locally: Each service can be run using node index.js and accessed via http://localhost:<port>.

2) Dockerization
2.1 Dockerfiles are provided for each service.
2.2 Build Docker images for the Hello, World, and Integration services:

docker build -t hello-service ./hello-service
docker build -t world-service ./world-service
docker build -t integration-service ./integration-service

2.3 Run the containers: Use Docker to verify that the services work independently before deploying them to Kubernetes.

3) Kubernetes Deployment
3.1 Deploy to Kubernetes:

kubectl apply -f hello-service.yaml
kubectl apply -f world-service.yaml
kubectl apply -f integration-service.yaml

3.2 Expose services: Use kubectl port-forward to access the services from your local machine:
kubectl port-forward service/integration-service 8080:80

3.3 Test the integration: Access the combined "Hello World" output at http://localhost:8080.