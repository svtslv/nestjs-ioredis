"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedisConnection = exports.getRedisConnectionToken = exports.getRedisOptionsToken = void 0;
const Redis = require("ioredis");
const redis_constants_1 = require("./redis.constants");
function getRedisOptionsToken(connection) {
    return `${connection || redis_constants_1.REDIS_MODULE_CONNECTION}_${redis_constants_1.REDIS_MODULE_OPTIONS_TOKEN}`;
}
exports.getRedisOptionsToken = getRedisOptionsToken;
function getRedisConnectionToken(connection) {
    return `${connection || redis_constants_1.REDIS_MODULE_CONNECTION}_${redis_constants_1.REDIS_MODULE_CONNECTION_TOKEN}`;
}
exports.getRedisConnectionToken = getRedisConnectionToken;
function createRedisConnection(options) {
    const { config, createClient } = options;
    if (createClient) {
        console.log(createClient);
        return createClient();
    }
    if (config.url) {
        return new Redis(config.url, config);
    }
    else {
        return new Redis(config);
    }
}
exports.createRedisConnection = createRedisConnection;
