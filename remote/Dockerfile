FROM node:alpine

WORKDIR /usr/src/app/

COPY ./package.json /usr/src/app/

RUN npm install --save --legacy-peer-deps

COPY . /usr/src/app/

CMD ["npm", "run", "start"]