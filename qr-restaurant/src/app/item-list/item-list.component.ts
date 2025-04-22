import { Component } from '@angular/core';
import { Item } from '../../types';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  items: Item[] = [];
  constructor() {}
}
