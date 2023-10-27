# # build stage
# FROM node:lts-alpine as build-stage
# WORKDIR /vue
# COPY package*.json ./
# RUN yarn install
# COPY . .
# RUN yarn build

# # production stage
# FROM nginx:latest as production-stage
# COPY --from=build-stage /vue/dist /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
FROM node:latest

WORKDIR /app

COPY ./package*.json ./

RUN yarn install

COPY . .

# EXPOSE 3001

CMD ["yarn", "dev"]
