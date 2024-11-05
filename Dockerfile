FROM node:alpine

WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Copy the rest of your application code
COPY . .

RUN npm run build

# Command to run the application
CMD ["node", "dist/index.js"]  
