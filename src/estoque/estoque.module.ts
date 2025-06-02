import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { Estoque, EstoqueSchema } from './schemas/estoque.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Estoque.name, schema: EstoqueSchema }])
  ],
  controllers: [EstoqueController],
  providers: [EstoqueService],
})
export class EstoqueModule {}
