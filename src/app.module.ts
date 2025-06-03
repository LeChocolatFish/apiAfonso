import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstoqueModule } from './estoque/estoque.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI', { infer: true }),
      }),
      inject: [ConfigService],
    }),
    EstoqueModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}