import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 10,
    firstName: 'Beetroot field',
    lastName: 'Watering',
    username: 'medium',
  },
  {
    id: 11,
    firstName: 'Beetroot field',
    lastName: 'Fertilizing (see predictions section for fertilizer suggestions)',
    username: 'low',
  },
  {
    id: 12,
    firstName: 'Corn field',
    lastName: 'Watering',
    username: 'low',
  }]

  getData() {
    return this.data;
  }
}
