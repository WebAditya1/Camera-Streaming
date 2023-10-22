#/bin/sh

# Script for raspberry pi

# 1. Installing docker 
sudo apt-get update -y && sudo apt-get upgrade -y
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh -y


# 2. Pulling ffmpeg docker
sudo docker pull bluenviron/mediamtx:latest-ffmpeg-rpi

# 3. Creating a mediamtx service to start docker as soon as raspberry pi boots

sudo cat >/etc/systemd/system/mediamtx.service <<EOL
[Unit]
Description=Docker MediaMTX Service
After=docker.service
Wants=docker.service

[Service]
ExecStartPre=/usr/bin/docker pull bluenviron/mediamtx:latest-ffmpeg-rpi
ExecStart=/usr/bin/docker run -d --rm -it --network=host --privileged --tmpfs /dev/shm:exec -v /run/udev:/run/udev:ro -e MTX_PATHS_CAM_SOURCE=rpiCamera bluenviron/mediamtx:latest-ffmpeg-rpi

[Install]
WantedBy=multi-user.target
EOL

#4. Reload systemd daemon
sudo systemctl daemon-reload

#5. Enable systemd service
sudo systemctl enable mediamtx.service

#6. Start systemd service
sudo systemctl start mediamtx.service

#7. Install Tailscale 
curl -fsSL https://tailscale.com/install.sh | sh
