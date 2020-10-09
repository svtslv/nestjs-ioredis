import { DynamicModule } from '@nestjs/common';
import { RedisModuleAsyncOptions, RedisModuleOptions } from './redis.interfaces';
export declare class RedisModule {
    static forRoot(options: RedisModuleOptions, connection?: string): DynamicModule;
    static forRootAsync(options: RedisModuleAsyncOptions, connection?: string): DynamicModule;
}
