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

if ! command -v 7z &> /dev/null; then
    echo "Installing 7z..."

    # Check for package manager and use the appropriate installation command
    if command -v apt-get &> /dev/null; then
        sudo apt-get update
        sudo apt-get install p7zip-full
    elif command -v yum &> /dev/null; then
        sudo yum install p7zip-full
    elif command -v brew &> /dev/null; then
        brew install p7zip-full
    else
        echo "Could not install 7z. Please install it manually."
        exit 1
    fi
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

# Check if the RAR file exists
lib="lib.rar"
assets="assets.rar"

if [ ! -f "$lib" ]; then
    echo "$lib not found."
    exit 1
fi

if [ ! -f "$assets" ]; then
    echo "$assets not found."
    exit 1
fi

# Extract the RAR file
7z x "$lib"
7z x "$assets"

# Check the exit status of 7z
if [ $? -eq 0 ]; then
    echo "Extraction successful."
else
    echo "Extraction failed."
fi

# Install project dependencies
echo "Installing node modules..."
npm install

# Start the application using pm2 (assuming pm2 is installed)
echo "Starting the application"

#npm start dist/main.js
pm2 start npm --name "fitness-academic-admin-dashboard" -- start

#start application after server reboot
pm2 startup

echo "Installation completed!"
