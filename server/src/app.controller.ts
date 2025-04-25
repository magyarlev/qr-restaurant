import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './schemas/item.schema';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllItems(): Promise<Item[]> {
    return this.appService.getAllItems();
  }
}
