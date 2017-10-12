# Angular + Django seed

This is an opinionated bootstrap repository for Django with Angular

## Requirements
* ensure Docker and Docker Compose are installed (https://docs.docker.com/compose/install/)
* check that no other docker containers are blocking ports 3000, 8000 or 9000
* run `make firstrun` - this will download and build all necessary docker images, runs migrations and initiate django development server
* in new terminal window run `make dev` that starts a webpack development server with hot reload (which proxies requests to django server)
* the development is then done on http://localhost:3000

## Key Django features
* based on Django Rest Framework
* django-rest-auth is used for the authentization (with JWT tokens)

### swagger
* it is possible to see the definition of all the endpoints on http://localhost:9000
* however, note that this is only possible thanks to @swagger_permissions decorator, which is necessary to use with every protected view
* future use - it should be possible to generate Angular services based on auto-generated swagger file
* Unfortunately, this is not currently possible due to the following issue: (https://github.com/marcgibbons/django-rest-swagger/issues/549)

## Angular key feature
* django-rest-auth implementation
* interceptors are used for sending JWT tokens
* the app is based around ngrx (upgrade to v4 coming soon)
* the app is derived from the project angular-webpack2-starter
* for the e2e testing, docker image webnicer/protractor-headless is used
* pug files can be used instead of html files

## Docker
* why docker?
* all team members have identical development environment
* easy continuous integration / deployment strategies with tools, such as Drone
* easy production setup with Docker Swarm

## Make commands
* why make commands?
* less writing, really. Compare `make dev` vs `docker exec -it django-angular-client yarn run start:inline`
* the commands are defined in build/makefiles directory and aggregated in Makefile file

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
* `genswagger` - generates swagger file based on django models
* `tsgen` - generates angular interfaces and services based on previously generated swagger file. Please note the generated services are currently not usable (for Angular 4.3+)

### Docker make commands
* `buildpostgres` - builds postgres image
* `buildpostgis` - builds postgis image
* `buildserver` - build django server image - for development only
* `buildgeosserver` - build django server where geo django can be enabled - for development only
* `buildclient` - build client image
* `prune` - removes unused images and containers

# Internal project dependencies
* this project is based on the angular-webpack2-starter project (https://github.com/qdouble/angular-webpack2-starter)


# License
* The project on which the project is based on, angular-webpack2-starter project, is licensed under MIT
* Also, password equality directive is based on https://github.com/NetanelBasal/ngx-text-equality-validator, licensed under the ISC license
* This repository is licensed under MIT
