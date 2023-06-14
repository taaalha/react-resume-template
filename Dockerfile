# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=19.9.0
FROM node:${NODE_VERSION}-slim as base


# Next.js app lives here
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the project files to the working directory
COPY . .

# Build the project
RUN yarn build

# Expose the port on which your application will run (if applicable)
EXPOSE 3000

# Start the application
CMD ["yarn", "run", "start"]
