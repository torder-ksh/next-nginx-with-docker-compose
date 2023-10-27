

FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./vue-app/package*.json ./
RUN yarn install
COPY ./vue-app/ .
RUN yarn build

FROM nginx:latest
COPY ./nginx/prod.default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /etc/nginx/html


