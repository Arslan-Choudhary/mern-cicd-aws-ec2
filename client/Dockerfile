FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=bulid /app/build /usr/share/nginx/html