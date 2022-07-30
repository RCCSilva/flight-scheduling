FROM node:alpine as builder

WORKDIR /app

COPY . . 
RUN yarn
RUN yarn build
RUN yarn db:generate

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/dist dist
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules/.prisma/ /app/node_modules/.prisma/
COPY --from=builder /app/yarn.lock yarn.lock

RUN yarn install --production=true

CMD ["yarn", "start"]
