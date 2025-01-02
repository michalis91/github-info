FROM node:18 AS react-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build

FROM node:18 AS nest-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend ./
RUN npm run build

FROM node:18
WORKDIR /app

ENV GITHUB_API_URL=https://api.github.com
ENV PORT=4000

COPY --from=react-build /app/frontend/build ./frontend-build

COPY --from=nest-build /app/backend/dist ./backend/dist
COPY --from=nest-build /app/backend/node_modules ./backend/node_modules

RUN npm install -g serve

EXPOSE 3000 4000

CMD sh -c "serve -s frontend-build -l 3000 & node backend/dist/main.js"
