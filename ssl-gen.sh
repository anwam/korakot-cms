!#/bin/sh

# Generate a self-signed certificate for the server
openssl req -new -x509 -days 3650 -nodes -out server.crt -keyout server.key
