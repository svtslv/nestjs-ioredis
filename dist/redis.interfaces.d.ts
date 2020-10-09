import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import * as Redis from 'ioredis';
export declare type Redis = Redis.Redis;
export interface RedisModuleOptions {
    config?: Redis.RedisOptions & {
        url?: string;
    };
    createClient?(redisOpts?: Redis.RedisOptions): Redis.Redis | Redis.Cluster;
}
export interface RedisModuleOptionsFactory {
    createRedisModuleOptions(): Promise<RedisModuleOptions> | RedisModuleOptions;
}
export interface RedisModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<RedisModuleOptionsFactory>;
    useExisting?: Type<RedisModuleOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<RedisModuleOptions> | RedisModuleOptions;
}
