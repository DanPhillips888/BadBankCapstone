# BadBankCapstone
Full three tiered banking demo

This assignment was to submit a fully deployed app. This is still being worked on but the application can be run locally for testing.
It is a three tiered banking application with a database storing client login and account info.
It is currently being developed to run in Docker containers and be depolyed to a cloud service.

local RUN Instructions:
Download the files into a local folder

at the commnad line cd into the folder
run> npm install

with docker running on your local machine build a new image for the backend with
   >docker run --name badbank -d

from the local folder run> node index.js

This runs the front end locally at port 8080 and will connect with the backend running in the container on port 27017.

LICENCE: MIT xPro
