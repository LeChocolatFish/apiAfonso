import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstoqueModule } from './estoque/estoque.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //falha de segurança abaixo, não colocar a url diretamente assim, ela deve ser colocada no .env
  imports: [MongooseModule.forRoot('mongodb+srv://Eu:glor1aaDeus_@testedemongo.3uxg7mk.mongodb.net/?retryWrites=true&w=majority&appName=TesteDeMongo'),EstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
