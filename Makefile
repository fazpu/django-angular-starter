-include build/makefiles/backend.Makefile
-include build/makefiles/deploy.Makefile
-include build/makefiles/docker.Makefile
-include build/makefiles/frontend.Makefile

firstrun: buildserver buildclient composeup python -c "import time; time.sleep(5)" makemigrations migrate runserver
