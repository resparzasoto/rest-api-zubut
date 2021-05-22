# Build
FROM node:14 as builder

# Dependencies
COPY ["package.json", "package-lock.json", "/usr/app/"]

# Environment
WORKDIR /usr/app/

# Install
RUN npm install --production

COPY [".", "/usr/app/"]

# Serve
FROM node:14

COPY --from=builder ["/usr/app/", "/usr/app/"]

WORKDIR /usr/app/

# App
ARG NODE_ENV
ARG PORT
ARG HOST

# Database
ARG DATABASE_DIALECT
ARG DATABASE_HOST
ARG DATABASE_NAME
ARG DATABASE_USERNAME
ARG DATABASE_PASSWORD
ARG DATABASE_NATIVE
ARG DATABASE_SYNC

RUN npm install --production

COPY [".env", "/usr/app/.env"]

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]