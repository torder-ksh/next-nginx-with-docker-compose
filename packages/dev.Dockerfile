
# FROM node:lts-alpine as build-stage
# WORKDIR /vue
# COPY ./vue-app/package*.json ./
# RUN yarn install
# COPY ./vue-app .
# RUN yarn build

FROM nginx:latest

COPY ./nginx/dev.default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage /vue/dist /etc/nginx/html


