![node](https://img.shields.io/badge/node.js-informational?style=flat&logo=node.js&logoColor=white&color=6aa6f8)
![express](https://img.shields.io/badge/express-informational?style=flat&logo=express&logoColor=white&color=6aa6f8)
![mongo-db](https://img.shields.io/badge/mongo-informational?style=flat&logo=mongodb&logoColor=white&color=6aa6f8)
![nginx](https://img.shields.io/badge/nginx-informational?style=flat&logo=nginx&logoColor=white&color=6aa6f8)
![microservices](https://img.shields.io/badge/microservices-informational?style=flat&logo=microservices&logoColor=white&color=6aa6f8)
![docker](https://img.shields.io/badge/docker-informational?style=flat&logo=docker&logoColor=white&color=6aa6f8)
![react](https://img.shields.io/badge/react-informational?style=flat&logo=react&logoColor=white&color=6aa6f8)
![redux](https://img.shields.io/badge/redux-informational?style=flat&logo=redux&logoColor=white&color=6aa6f8)


# eCommerce micro-service app

## Introduction

A practical example of NodeJS Microservices Architecture. 

it is a simple eCommerce Application using Microservices Architecture without impact frontend. So each individual services will work independently to server the purpose and business logic.  

![architecture](./.doc/images/architecture.png)

## Folder description

- [./app](./app): a simple frontend App
- [./customer](./customer): customer micro-services
- [./products](./products): products micro-services
- [./shopping](./shopping): shopping micro-services
- [./proxy](./proxy): nginx files



## Technology Stack & Tools

- Visual Studio Code
- nvm / nodejs / npm / npx
- Javascript (React & Testing)
- Express
- MongoDb
- [Studio 3T](https://studio3t.com/)
- reactjs, Redux
- micro-services
- nginx
- docker, docker-compose
- [jest-js](https://jestjs.io/)
- [cloudamqp](https://www.cloudamqp.com/)

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/)
- Install [mongoDb](https://www.mongodb.com/)
- Register and get a free Queue in [cloudamqp](https://www.cloudamqp.com/) or use a local Queue (more details [here](https://www.rabbitmq.com/download.html))

## Setting Up
### 1. Clone/Download the Repository
`$ git clone repo_url`

### 2. Install Dependencies
`$ npm install` (in each folder: app, customer, shopping, products)


### 3. Configure env variables

- Create .env.dev file in each folder (app, customer, shopping, products).
- Set the value of the variables based on the example file _sample_env_.

### 4. Start services

  `$ docker-compose -f docker-compose.yml up`

### 5. Start app

- dev:

  `$ npm run start`

  **Important note**: Take care that the app has setted only one url base + port to all services in code, assuming services are started with a reverse proxy (nginx). So, if you start each service in separate url and port, the app will not work for you.

### 6. Run tests

  `$ npm run test`

### 7. Postman endpoints
See postman json file in [./.doc/pstman](./.doc/pstman)

---

# References

* EXDkgjU8DDU
