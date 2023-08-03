FROM node:16.20.1
WORKDIR /var/www
COPY api .
CMD [ "npm", "run", "dev" ]