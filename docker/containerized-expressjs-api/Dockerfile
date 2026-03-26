FROM node:24-slim
WORKDIR /expressjs-api
# making docker build more efficient; no rebuilding node modules unless packages change
COPY package.json package-lock.json ./
RUN npm i
COPY . ./
CMD [ "npm", "start" ]