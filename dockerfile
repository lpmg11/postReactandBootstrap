FROM node:18.12.1-alpine3.17

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "dist" ]