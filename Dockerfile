# Use a Node 16 base image
FROM node:16-alpine

# Docker image description
LABEL versino=1.0.0
LABEL description="This is a base docker image for the task-list-app"
LABEL maintainer="@soyelagi"

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN npm run build
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]