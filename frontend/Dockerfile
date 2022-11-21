# Imagem de Origem
FROM node
ENV HOME=/home/app
WORKDIR $HOME
COPY package.json ./
RUN yarn install --silent

EXPOSE 3000

CMD ["yarn", "dev", "--", "--host", "0.0.0.0"]