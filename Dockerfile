# Stage 1: Build the Angular app
FROM node:slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/angular-docker-poc /usr/share/nginx/html

EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
