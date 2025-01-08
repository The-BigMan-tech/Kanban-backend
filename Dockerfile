# Use a specific Node.js version
FROM node:20

# Set the working directory
WORKDIR /app/nest

# Copy only package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application (if needed)
RUN npm run build

# Expose the application port
EXPOSE 3100

# Command to run the application
CMD ["npm", "run", "start:prod"]
