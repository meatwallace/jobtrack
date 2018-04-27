package org.bencompany.jobtrack.gateway.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.URI;

@Component
public class JobService {

    @Value("${jobService.host}")
    String jobServiceHost;

    @Value("${jobService.port}")
    String jobServicePort;

    private static final String randomJobEndpoint = "/api/job/random";

    public Mono<String> getRandomJob() {
        return getJobFromService();
    }

    private Mono<String> getJobFromService() {
        return WebClient.create()
                .method(HttpMethod.GET)
                .uri(URI.create(getBaseUrl() + randomJobEndpoint))
                .retrieve()
                .bodyToMono(String.class);
    }

    private String getBaseUrl() {
        return jobServiceHost + ":" + jobServicePort;
    }
}
