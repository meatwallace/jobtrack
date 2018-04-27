# job-track
kubernetes spring boot tomfoolery

## dependencies
- docker
- kubectl
- minikube
- java 10

## how to run

kubectl start -f job-track.yml

##### ok, now what

minikube service jobtrack-service 

## what about stopping

kubectl destroy -f job-track.yml
