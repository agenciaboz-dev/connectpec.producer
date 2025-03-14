# Stage 1: Build the React Application
FROM node:22 as build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN npx expo export --platform web

# Stage 2: Serve the React Application using a simple HTTP server
FROM node:22 as production
WORKDIR /app
RUN yarn global add serve
COPY --from=build /app/dist /app
CMD serve -s . -l tcp://0.0.0.0:${PORT}
