# NestJS IORedis

<a href="https://www.npmjs.com/package/@svtslv/nestjs-ioredis"><img src="https://img.shields.io/npm/v/@svtslv/nestjs-ioredis.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/@svtslv/nestjs-ioredis"><img src="https://img.shields.io/npm/l/@svtslv/nestjs-ioredis.svg" alt="Package License" /></a>

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Examples](#examples)
- [License](#license)

## Description
Integrates IORedis with Nest

## Installation

```bash
npm install @svtslv/nestjs-ioredis ioredis
```

```bash
npm install -D @types/ioredis
```

You can also use the interactive CLI

```sh
npx nestjs-modules
```

## Examples

```sh
docker run -p 6379:6379 redis
```

### RedisModule.forRoot(options, connection?)

```ts
import { Module } from '@nestjs/common';
import { RedisModule } from '@svtslv/nestjs-ioredis';
import { AppController } from './app.controller';

@Module({
  imports: [
    RedisModule.forRoot({
      config: { 
        // host: 'localhost',
        // port: 6379,
        url: 'redis://localhost:6379',
      },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

### RedisModule.forRootAsync(options, connection?)

```ts
import { Module } from '@nestjs/common';
import { RedisModule } from '@svtslv/nestjs-ioredis';
import { AppController } from './app.controller';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: () => ({
        config: { 
          // host: 'localhost',
          // port: 6379,
          url: 'redis://localhost:6379',
        },
      }),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

### InjectRedis(connection?)

```ts
import { Controller, Get, } from '@nestjs/common';
import { InjectRedis, Redis } from '@svtslv/nestjs-ioredis';

@Controller()
export class AppController {
  constructor(
    @InjectRedis() private readonly redis: Redis,
  ) {}

  @Get()
  async getHello() {
    await this.redis.set('key', 'Redis data!');
    const redisData = await this.redis.get("key");
    return { redisData };
  }
}
```

## License

MIT
