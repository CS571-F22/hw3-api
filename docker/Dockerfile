FROM node:16
WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
RUN npm install

COPY src/. src/.
COPY includes/. includes/.

EXPOSE 56933
CMD [ "npm", "start" ]