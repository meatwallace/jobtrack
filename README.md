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

`./gradlew build docker`

`kubectl start -f job-track.yml`

##### ok, now what

`minikube service jobtrack-service`

## what about stopping

`kubectl destroy -f job-track.yml`
