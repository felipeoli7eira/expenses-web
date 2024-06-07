FROM node:lts-alpine

WORKDIR /usr/frontend

COPY package*.json .

RUN npm install -g http-server

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
# CMD [ "npm", "start", "--host", "0.0.0.0", "--port", "3000", "--disableHostCheck", "true" ]
