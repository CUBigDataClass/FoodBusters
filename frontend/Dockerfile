FROM node:10
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


COPY  package*.json /usr/src/app/


COPY . /usr/src/app

RUN npm install


EXPOSE 4200

RUN npm install mongoose
RUN npm install mongodb --save
RUN npm install -g @angular/cli
CMD ["ng", "serve"]
