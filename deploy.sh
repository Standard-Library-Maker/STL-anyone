#!/bin/bash
## file transfer
rsync -avP web/build/ pi@$server_uri:/home/pi/stl -e "ssh -o StrictHostKeyChecking=no"