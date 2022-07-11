FROM node:14 as dependencies
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:14 as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

FROM node:14 as runner
WORKDIR /app
ENV NODE_ENV development

COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/store.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env.local ./

EXPOSE 3000
CMD ["yarn", "start"]