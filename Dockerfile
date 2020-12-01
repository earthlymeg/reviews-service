FROM node:12.18-alpine

WORKDIR /FEC-Review

COPY . .

RUN npm install --production

EXPOSE 3004

CMD ["npm", "start"]
