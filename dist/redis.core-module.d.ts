import { DynamicModule, Provider } from '@nestjs/common';
import { RedisModuleAsyncOptions, RedisModuleOptions } from './redis.interfaces';
export declare class RedisCoreModule {
    static forRoot(options: RedisModuleOptions, connection?: string): DynamicModule;
    static forRootAsync(options: RedisModuleAsyncOptions, connection: string): DynamicModule;
    static createAsyncProviders(options: RedisModuleAsyncOptions, connection?: string): Provider[];
    static createAsyncOptionsProvider(options: RedisModuleAsyncOptions, connection?: string): Provider;
}
