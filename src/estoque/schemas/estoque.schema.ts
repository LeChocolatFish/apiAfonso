
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EstoqueDocument = Estoque & Document;

@Schema()
export class Estoque {
  @Prop({ required: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const EstoqueSchema = SchemaFactory.createForClass(Estoque);
