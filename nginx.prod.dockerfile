FROM node:8.6-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install pm2 -g

COPY . .

EXPOSE 3002
CMD ["node", "start"]

# FROM node:latest as node
# LABEL author="Duncan Faulkner"
# WORKDIR /app
# COPY package.json package.json
# RUN npm install
# COPY . .

# FROM keymetrics/pm2:latest-alpine
# VOLUME /var/cache/nginx
# COPY --from=node /app /usr/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3002
# CMD ["pm2-runtime", "start"]

# RUN npm install pm2 -g

# nineteen70/chameleon-api
# docker build -t duncanscrubs -f nginx.prod.dockerfile .
# docker build --rm -f "nginx.prod.dockerfile" -t duncanscrubs: .
# docker run -d -p 8081:3002 duncanscrubs

