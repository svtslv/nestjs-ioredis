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

## Examples

```sh
docker run -p 6379:6379 redis
```

```ts
import { Module } from '@nestjs/common';
import { RedisModule } from '@svtslv/nestjs-ioredis';
import { AppController } from './app.controller';

@Module({
  imports: [
    RedisModule.forRoot({
      config: 'redis://localhost:6379',
      // config: { 
      //   port: 6379,
      //   host: 'localhost',
      // },
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

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
