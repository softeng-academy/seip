#!/bin/sh
if [ ! -d node_modules/crypto-js ]; then
    npm install crypto-js
fi
exec node etc/encrypt.js "$@"
