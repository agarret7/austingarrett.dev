FROM node:14
WORKDIR /app

# installing dependencies
COPY ./package.json ./
RUN npm install

# Running the app
CMD [ "npm", "run", "dev" ]
