### STAGE 1: Build ###
FROM node:15.14.0-alpine3.10 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install -g @angular-devkit/build-angular
RUN npm install
COPY . .
RUN npm run build-prod

### STAGE 2: Run ###
FROM nginx:1.19.10-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY nginx.conf /etc/nginx/sites-enabled/nginx.conf
COPY .htaccess /usr/share/nginx/html
COPY routes.json /usr/share/nginx/html
COPY web.config /usr/share/nginx/html
COPY --from=build /usr/src/app/dist/signature /usr/share/nginx/html
