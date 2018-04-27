# job-track
kubernetes spring boot tomfoolery

## what is it
- two backend services (user, job) and an exposed API gateway service (gateway)
- built using reactive stuff where possible
- everything is dockerized and running in a single kubernetes pod / deploy

## dependencies
- docker
- kubectl
- minikube
- java 10

## how to run

backend

`./gradlew build docker`

`kubectl start -f job-track.yml`

frontend

`cd ./frontend && yarn start`

##### ok, now what

`minikube service jobtrack-service` to test api gateway

*it will always build on port 31000, but everyone gets a different minikube IP so just use that command^*

`localhost:3000` for front end
## what about stopping

`kubectl destroy -f job-track.yml` 

or throw your computer out of a window or something
