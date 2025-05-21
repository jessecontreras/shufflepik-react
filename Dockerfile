# Use an official Node.js 22 Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy app files
COPY . .

# Build for production
RUN npm run build

# Expose the default port for Next.js
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
