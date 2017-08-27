makemigrations:
	docker exec -it django-angular-server /venv/bin/python /code/server/manage.py makemigrations --settings settings.dev

migrate:
	docker exec -it django-angular-server /venv/bin/python /code/server/manage.py migrate --settings settings.dev

initdata:
	docker exec -it django-angular-server /venv/bin/python /code/server/manage.py loaddata server/app_data/initial_data/dev.json --settings settings.dev

runserver:
	docker exec -it django-angular-server /venv/bin/python /code/server/manage.py runserver 0.0.0.0:8000 --settings settings.dev

shell:
	docker exec -it django-angular-server /venv/bin/python /code/server/manage.py shell --settings settings.dev

runswagger:
	docker exec -it django-angular-server /venv/bin/python /code/server/manage.py runserver 0.0.0.0:9000 --settings settings.swagger
