FROM node

WORKDIR /app

COPY . /app

RUN yarn install


CMD ["yarn", "dev"]