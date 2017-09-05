# development
buildpostgis:
	docker build . -t django-angular-postgis -f build/docker/dev/geos/postgis/Dockerfile

buildserver:
	docker build . -t django-angular-server -f build/docker/dev/non-geos/server/Dockerfile

buildgeosserver:
	docker build . -t django-angular-server -f build/docker/dev/geos/server/Dockerfile

buildclient:
	docker build . -t django-angular-client -f build/docker/dev/client/Dockerfile

composeup:
	docker-compose -f docker-compose-dev.yml up -d

composedown:
	docker stop django-angular-server django-angular-postgres django-angular-client django-angular-codegen

prune:
	docker image prune -f && docker container prune -f

# production
buildprodserver:
	docker build . -t django-angular-server -f build/docker/dev/non-geos/server/Dockerfile

buildprodgeosserver:
	docker build . -t django-angular-server -f build/docker/dev/geos/server/Dockerfile

serversh:
	docker exec -it django-angular-server sh

clientsh:
	docker exec -it django-angular-client sh
