FROM node:latest as base
WORKDIR /home/node/app
COPY ./ ./
RUN npm i
copy . .

FROM base as production

ENV NODE_PATH=./build

EXPOSE 8080

RUN npm install -D typescript
RUN npm install -D ts-node

CMD [ "npx", "ts-node", "index.ts" ]

#ENTRYPOINT ["npm", "run", "dev" ,"--" ,"--host"]

#NEVER USE PORT 5173 BECAUSE FUCK YOU LIOR