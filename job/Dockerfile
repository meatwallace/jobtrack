FROM openjdk:10.0.1-jdk

COPY ./job-1.0.jar app.jar

EXPOSE 8001

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]