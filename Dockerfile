FROM node:20.5.1

WORKDIR /dockerised-crud-api

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]