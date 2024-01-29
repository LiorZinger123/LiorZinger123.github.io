FROM node:latest as base
WORKDIR /home/node/app
COPY ./ ./
RUN npm i
copy . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 4173

CMD [ "npm", "run", "preview","--","--host" ]

#ENTRYPOINT ["npm", "run", "dev" ,"--" ,"--host"]

#NEVER USE PORT 5173 BECAUSE FUCK YOU LIOR