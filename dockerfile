FROM node:20-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "/usr/app/dist/server.js"]