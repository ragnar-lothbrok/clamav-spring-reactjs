# clamav-spring-reactjs
This project integrates spring with clamav and provide a UI for file upload.

https://medium.com/@raghunitb/part2-dockerized-filevirus-detection-service-using-clamav-and-spring-boot-541c689e3634

https://medium.com/@raghunitb/part1-virus-detection-service-using-clamav-and-java-48212a2e5af9


# Docker Commands

docker build -t clamav-scanner .

docker image ls -a | grep clamav-scanner

docker run -p 8080:8080  clamav-scanner
