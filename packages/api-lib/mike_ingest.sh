#!/bin/bash


export ES_HOST=omitted
export AWS_REGION=us-west-2
export AWS_ACCESS_KEY_ID=omitted
export AWS_SECRET_ACCESS_KEY=omitted
export LOG_LEVEL=debug

# if you get an error like "Unable to connect to elasticsearch"
# try increasing the ping requestTimeout in libs/es.js
node mike_ingest.js
