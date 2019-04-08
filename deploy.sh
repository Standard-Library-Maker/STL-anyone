#!/bin/bash
## file transfer
rsync -avP ./web pi@$server_uri:/home/pi/stl -e "ssh -o StrictHostKeyChecking=no"

## server restart
ssh pi@$server_uri -i ~/.ssh/id_rsa -o StrictHostKeyChecking=no <<'ENDSSH'
npm run build
npm start
ENDSSH