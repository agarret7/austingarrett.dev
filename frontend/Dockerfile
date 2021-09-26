FROM node:14
WORKDIR /app

# installing dependencies
RUN mkdir /deps
COPY package.json /deps
RUN npm install /deps

# Running the app
CMD bash -c "cp -r /deps/node_modules /app && npm run dev"
