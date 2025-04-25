import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop()
  id: string;
  @Prop()
  category: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  image: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
