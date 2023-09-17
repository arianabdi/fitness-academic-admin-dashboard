#!/bin/bash

sudo apt install git

# Install Node.js (if not already installed)
if ! command -v node &>/dev/null; then
  echo "Installing Node.js..."
  curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

if ! command -v jq &>/dev/null; then
  echo "Installing jq..."
  sudo apt-get install -y jq
fi

# Install NestJS CLI (if not already installed)
if ! command -v nest &>/dev/null; then
  echo "Installing NestJS CLI..."
  sudo npm install -g @nestjs/cli
fi


# Install NestJS CLI (if not already installed)
if ! command -v pm2 &>/dev/null; then
  echo "Installing pm2..."
  sudo npm install -g pm2
fi


# Clone your GitHub repository (replace <your-github-repository-url> with your actual repository URL)
echo "Cloning your project..."
git clone "https://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@github.com/arianabdi/fitness-academic-admin-dashboard"

# Navigate to the project directory
cd fitness-academic-admin-dashboard

# Install project dependencies
echo "Installing node modules..."
npm install

# Build the NestJS application
echo "Building the NestJS application..."
npm run build

# Start the application using pm2 (assuming pm2 is installed)
echo "Starting the application"
#npm start dist/main.js
pm2 start dist/main.js --name fitness-academic-admin-dashboard

#start application after server reboot
pm2 startup

echo "Installation completed!"
