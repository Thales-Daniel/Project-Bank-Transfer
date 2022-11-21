FROM node

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn prisma migrate dev

# RUN yarn prisma generate

EXPOSE 3333

# CMD ["yarn","prisma", "migrate", "dev"]

# CMD ["yarn","prisma", "migrate", "dev"]

CMD ["yarn","dev"]


