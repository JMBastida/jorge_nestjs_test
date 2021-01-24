import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';
import { config } from './config';
import { GraphModule } from './graph-module/graph.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphModule,
    UsersModule,
    MongooseModule.forRoot(config.MONGODB_URI),
  ],
  controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
