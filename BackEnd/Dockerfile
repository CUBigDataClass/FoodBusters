FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install yelp-fusion

RUN npm install express

RUN npm install cors

RUN npm install body-parser nodemon

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]