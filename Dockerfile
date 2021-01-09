FROM node

COPY . .
RUN npm install

EXPOSE 1234
CMD node ./index.js
