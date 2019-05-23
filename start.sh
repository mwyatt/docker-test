#!/bin/bash

if [ -z ${DEBUG+x} ]; then
  node server.js
else
  node-inspector --web-port 9080 &
  node --debug server.js
fi