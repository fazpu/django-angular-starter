dev:
	docker exec -it django-angular-client yarn run start:inline

watchaot:
	docker exec -it django-angular-client yarn run watch:aot

buildaot:
	docker exec -it django-angular-client yarn run build:aot:prod

etest:
	make composeup && docker logs e2e

utest:
	docker exec -it django-angular-client yarn run test

pretest:
	docker exec -it django-angular-client yarn run pretest

genswagger:
	wget 'http://localhost:8000/swagger?format=openapi' -O client/swagger/source/swagger.json

tsgen:
	docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/client/swagger/source/swagger.json -l typescript-angular2 -o /local/client/swagger/build

frontshell:
	docker exec -it django-angular-client bash

yarn:
	docker exec -it django-angular-client yarn

yarnupgrade:
	docker exec -it django-angular-client yarn upgrade

rmyarn:
	docker exec -it django-angular-client rm -rf /code/client/node_modules

refreshyarn: rmyarn yarn

builddll:
	docker exec -it django-angular-client yarn run build:dll
