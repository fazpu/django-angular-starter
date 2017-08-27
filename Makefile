-include build/makefiles/backend.Makefile
-include build/makefiles/deploy.Makefile
-include build/makefiles/docker.Makefile
-include build/makefiles/frontend.Makefile

firstrun: buildserver buildclient composeup makemigrations migrate runserver
