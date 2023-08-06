# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 80 to the host machine
EXPOSE 80

# Start the Node.js application
CMD ["npm", "start"]
