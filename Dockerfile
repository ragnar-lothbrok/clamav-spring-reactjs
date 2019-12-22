FROM azul/zulu-openjdk-alpine:11

RUN apk --no-cache add clamav-daemon freshclam clamav-libunrar supervisor

RUN sed -i 's/^Foreground .*$/Foreground true/g' /etc/clamav/clamd.conf && \
    echo 'TCPSocket 3310' >> /etc/clamav/clamd.conf && \
    sed -i 's/^Foreground .*$/Foreground true/g' /etc/clamav/freshclam.conf

# this is to bootstrap the virus definitions, as trying to start clamd without
# any just causes the process to die, upon the container starting it updates
# these immediately again
RUN freshclam

RUN mkdir /run/clamav && chown clamav:clamav /run/clamav
COPY etc /etc/

COPY target/*.jar app.jar
EXPOSE 3310/tcp
CMD ["supervisord", "-c", "/etc/supervisord.conf"]