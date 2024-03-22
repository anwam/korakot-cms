#!/bin/sh

# Generate a self-signed certificate for the server
# openssl req -new -x509 -days 3650 -nodes -out server.crt -keyout server.key
sudo openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout server.key -out server.crt
