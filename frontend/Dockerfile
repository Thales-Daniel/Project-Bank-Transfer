FROM node 

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn install

ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 3000

CMD ["yarn", "dev"]