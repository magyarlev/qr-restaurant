import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './schemas/item.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  async getAllItems(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }
}
