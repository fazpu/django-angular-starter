-include build/makefiles/backend.Makefile
-include build/makefiles/deploy.Makefile
-include build/makefiles/docker.Makefile
-include build/makefiles/frontend.Makefile

wait:
	sleep 5

firstrun: buildserver buildclient composeup wait makemigrations migrate initdata runserver
