# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the entire React app to the container
COPY . .

# Build the React app (you can replace 'build' with your actual build command)
RUN npm run build

# Use a smaller nginx-based image to serve the production build
FROM nginx:alpine

# Copy the built React app from the previous stage to the nginx public directory
COPY --from=0 /frontend/build /usr/share/nginx/html

# Remove the default nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 8080

# Start the nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]
