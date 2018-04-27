package org.bencompany.jobtrack.gateway.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.URI;

@Component
public class UserService {

    @Value("${userService.host}")
    String userServiceHost;

    @Value("${userService.port}")
    String userServicePort;

    private static final String randomUserEndpoint = "/api/user/random";

    public Mono<String> getRandomUser() {
        return getUserFromService();
    }

    private Mono<String> getUserFromService() {
        return WebClient.create()
                .method(HttpMethod.GET)
                .uri(URI.create(getBaseUrl() + randomUserEndpoint))
                .retrieve()
                .bodyToMono(String.class);
    }

    private String getBaseUrl() {
        return userServiceHost + ":" + userServicePort;
    }
}
