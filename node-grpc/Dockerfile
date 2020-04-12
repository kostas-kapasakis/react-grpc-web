FROM node:10

WORKDIR /

COPY package*.json ./

COPY tsconfig*.json ./

RUN npm ci --quiet && npm run build

COPY ./dist .

EXPOSE 9090

CMD [ "node", "server.js" ]