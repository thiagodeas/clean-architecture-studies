import { Module } from '@nestjs/common';
import { UsersModule } from './infra/users/users.module';
import { AuthModule } from './infra/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [],
  providers: [],
})

export class AppModule {}