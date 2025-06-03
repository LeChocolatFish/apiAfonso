
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EstoqueDocument = Estoque & Document;

@Schema()
export class Estoque {
  @Prop({ required: true })
  name: string;

  @Prop()
  preco: number;

  @Prop()
  descricao: string;

  @Prop()
  quantidade: number;
}

export const EstoqueSchema = SchemaFactory.createForClass(Estoque);
