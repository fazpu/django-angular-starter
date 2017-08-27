# Angular + Django seed

This is an opinionated bootstrap repository for Django with Angular

## Requirements
* Install Docker and Docker Compose
* run `make firstrun` - this will download all necessary docker images, runs migrations and initiate django development server
* in new terminal window run `make devhot` that starts a webpack development server (which proxies requests to django server)
* the development is then done on http://localhost:3000

## Key Django features
* based on Django Rest Framework
* django-rest-auth is used for the authentization (with JWT tokens)

### swagger
* it is possible to see the definition of all the endpoints on http://localhost:9000
* However, note that this is only possible thanks to @swagger_permissions decorator, which is necessary to use with every protected view


## Angular key feature
* django-rest-auth implementation
* interceptors are used for sending JWT tokens
* the app is based around ngrx
* the app is derived from the project angular-webpack2-starter
* for the e2e testing, docker image webnicer/protractor-headless is used
* pug files can be used instead of html files

## Make commands
* they make it easier to run common tasks
* the commands are based in build/makefiles directory and aggregated in Makefile file

* `firstrun` - turns on docker containers, run migrations and starts development server
* `composeup` - turns on docker containers

### Backend make commands
* `makemigrations` - runs django makemigrations
* `migrate` - runs django migrations
* `initdata` - loads initial data to database - development only
* `runserver` - runs django development server
* `shell` - gets you into the django shell
* `runswagger` - swagger definition is accessible on localhost:9000

### Frontend make commands
* `dev` - runs webpack development server with hot reload
* `watchaot` - recompiles typescript files upon change with AOT
* `etest` - runs end-to-end test
* `utest` - runs unit test
* `yarn` - runs yarn
* `yarnupgrade` - runs yarn upgrade
* `rmyarn` - removes node_modules
* `refreshyarn` - removes node_modules and runs yarn

### Swagger make commands
* `genswagger` - 
* `tsgen` - 

### Docker make commands
* `buildpostgres` - builds postgres image
* `buildpostgis` - builds postgis image
* `buildserver` - build django server image - for development only
* `buildgeosserver` - build django server where geo django can be enabled - for development only
* `buildclient` - build client image
* `prune` - removes unused images and containers

# Internal project dependencies
* This project is based on the angular-webpack2-starter project (https://github.com/qdouble/angular-webpack2-starter)


# License
* The project on which the project is based on, angular-webpack2-starter project, is licensed under MIT
* Also, password equality directive is based on https://github.com/NetanelBasal/ngx-text-equality-validator, licensed under the ISC license
* This repository is licensed under MIT
