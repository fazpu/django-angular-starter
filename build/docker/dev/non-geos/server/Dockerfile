# taken from https://www.caktusgroup.com/blog/2017/03/14/production-ready-dockerfile-your-python-django-app/
FROM python:3.5-alpine

# Copy in your requirements file
COPY server/requirements/base.txt /base.txt
COPY server/requirements/dev.txt /dev.txt

# Install build deps, then run `pip install`, then remove unneeded build deps all in a single step. Correct the path to your production requirements file, if needed.
RUN set -ex \

    && apk add --no-cache --virtual .build-deps \
            gcc \
            make \
            libc-dev \
            musl-dev \
            linux-headers \
            pcre-dev \
            postgresql-dev \

    && python3 -m venv /venv \
    && /venv/bin/pip3 install --upgrade pip \

    && LIBRARY_PATH=/lib:/usr/lib /bin/sh -c "/venv/bin/pip3 install --no-cache-dir -r /base.txt && /venv/bin/pip install --no-cache-dir -r /dev.txt" \
    && runDeps="$( \
            scanelf --needed --nobanner --recursive /venv \
                    | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
                    | sort -u \
                    | xargs -r apk info --installed \
                    | sort -u \
    )" \
    && apk add --virtual .python-rundeps $runDeps \
    && apk del .build-deps

# Copy your application code to the container (make sure you create a .dockerignore file if any large files or directories should be excluded)
RUN mkdir /code/
WORKDIR /code/
COPY . /code/
