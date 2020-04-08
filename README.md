# FoodBusters
Big Data project

Short Summary: 

You can find the first draft of the design on Figma 
https://www.figma.com/file/Iwlam4uA5HMXQQBgLCvOgy/BigData?node-id=34%3A187

# How to run the App

Frontend

> cd frontend

> npm install

> ng serve or node start

Go to  `http://localhost:4200/`

Backend

> cd BackEnd

> npm start

Go to  `http://localhost:3000/business/ + <city>`

if something error, you need to install

> npm install

> npm install mongoose      //for mongoDB

> npm install cors

> npm install -g nodemon


# How to Build Containers and Run Images in the Docker:

> docker-compose build

> docker-compose -d up

Go to  `http://localhost:8000/`

Stops Containers:

> docker-compose stop

Removes images:

> docker rmi $images_id

Removes all containers, image, network images, dbuild cache:

> docker system prune




