#Build Stage
FROM node:12.13.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

COPY ./ ./src

RUN npm ci --quiet && npm run build

#Deploy Stage
FROM node:12.13.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --quiet --only=production

COPY --from=builder /usr/src/app/dist ./dist

CMD [ "node", "/app/dist/server.js" ]
