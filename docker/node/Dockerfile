FROM node:16.13.1

RUN apt-get update \
  && apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb

COPY ./ /var/www/html/app
WORKDIR /var/www/html/app

CMD tail -f /dev/null
