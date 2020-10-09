"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectRedis = void 0;
const common_1 = require("@nestjs/common");
const redis_utils_1 = require("./redis.utils");
exports.InjectRedis = (connection) => {
    return common_1.Inject(redis_utils_1.getRedisConnectionToken(connection));
};
