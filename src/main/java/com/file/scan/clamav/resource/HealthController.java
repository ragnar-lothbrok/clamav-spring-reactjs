package com.file.scan.clamav.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.file.scan.clamav.config.*;
import com.file.scan.clamav.properties.*;
import java.io.IOException;

@RestController
@RequestMapping("/clamd/health")
public class HealthController {

    private static Logger LOGGER = LoggerFactory.getLogger(HealthController.class);

    @Autowired
    private AppProperties appProperties;

    @Autowired
    private ClamAVClient clamAVClient;

    @GetMapping
    public String healthCheck() {
        boolean isOk = false;
        try {
            isOk = clamAVClient.ping();
        } catch (IOException ex) {
            LOGGER.error("Exception occurred while pinging clamav = {} ",ex.getMessage());
        }
        return isOk ? "pong" : "ping";
    }

}
