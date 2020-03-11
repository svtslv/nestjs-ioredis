import { Module, DynamicModule, Provider } from "@nestjs/common";
import { RedisModuleOptions, RedisModuleAsyncOptions } from './redis.interfaces';
import { createRedisConnection, getRedisOptionsToken, getRedisConnectionToken } from './redis.utils'

@Module({})
export class RedisModule {
  static forRoot(options: RedisModuleOptions, connection?: string): DynamicModule {

    const redisModuleOptions: Provider = {
      provide: getRedisOptionsToken(connection),
      useValue: options,
    };

    const redisConnectionProvider: Provider = {
      provide: getRedisConnectionToken(connection),
      useValue: createRedisConnection(options),
    };

    return {
      module: RedisModule,
      providers: [
        redisModuleOptions,
        redisConnectionProvider,
      ],
      exports: [
        redisModuleOptions,
        redisConnectionProvider,
      ],
    };
  }

  static forRootAsync(options: RedisModuleAsyncOptions, connection?: string): DynamicModule {
    return {
      module: RedisModule,
      imports: [RedisModule.forRootAsync(options, connection)],
    };
  }
}
