#!/bin/sh

if [ $(ps -e -o uid,cmd | grep $UID | grep node | grep -v grep | wc -l | tr -s "\n") -eq 0 ]
then
        export PATH=/usr/local/bin:$PATH
        forever start --sourceDir /opt/nodejs/lanaosmunmusic.com server/app.js >> /var/log/nodejs/lanaosmunmusic.com.log 2>&1
fi
