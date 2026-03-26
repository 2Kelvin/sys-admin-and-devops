# Containerized Python Flask API
Containerizing a simple Python Flask API using Docker

Containerize a web app using `Docker` by building a Docker image for it first. Docker build syntax:
```bash
docker build -t docker_username/app_name:app_version_tag .

# Example
docker build -t rocketman02/simple-flask-api:v1 .
```
- -t: image name tag
- . --> means use the dockerfile in this folder

Once built, you can run a Docker containerized application of your app from the image by running:
```bash
docker run -d --name container_name -p hostPort:containerPort docker_app_image

# Example
docker run -d --name flask-api -p 5010:5000 rocketman02/simple-flask-api:v1
```
- -d: free terminal from active container logs
- --name: name of the newly to be created container
- -p: port mapping

You can push the built Docker image to docker hub for future use and for team collaboration like so:
```bash
docker push rocketman02/simple-flask-api:v1 
```