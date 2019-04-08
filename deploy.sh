#!/bin/bash
## file transfer
rsync -avP . pi@ssh.zer01ne.dev:/home/pi -e "ssh -o StrictHostKeyChecking=no"

## server restart
ssh pi@ssh.zer01ne.dev -o StrictHostKeyChecking=no <<'ENDSSH'
npm run build
npm start
ENDSSH