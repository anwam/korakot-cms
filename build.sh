#!/bin/sh

docker build \
  --build-arg NODE_ENV=production \
  --build-arg STRAPI_URL=https://api.korakomotors.com \
  -t local/korakot-cms:latest \
  -f Dockerfile .
