FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
# Expose 3000 since this would run behind the main reverse proxy nginx
EXPOSE 3000
# copy nginx config which will listen at port 3000 and serve content of 'html' directory as index
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html