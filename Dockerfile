FROM node:8

# Create app directory
WORKDIR /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]