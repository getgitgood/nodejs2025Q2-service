FROM node:22.16.0-alpine

WORKDIR /usr/app/server

RUN mkdir -p /usr/app/server/node_modules

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
