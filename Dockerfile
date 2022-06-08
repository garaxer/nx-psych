#
# Base
#

FROM node:18-alpine AS base
WORKDIR /nx
COPY package*.json ./

#
# Build
#

FROM base AS development

RUN npm install --only=development
COPY . .
RUN npm run build

#
# Production
#

FROM base AS production

EXPOSE 5000

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm install --only=production
RUN npm install -g concurrently
COPY . .
COPY --from=development /nx/dist/apps /dist/apps

CMD concurrently "cd dist/apps/api && node main.js" "cd dist/apps/app && npm run start"