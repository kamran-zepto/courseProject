import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class DataService {
  private data = [1, 2, 4, 5, 6];
  statusUpdated = new EventEmitter<string>();

  constructor(private logService: LoggingService) {}

  getData() {
    return this.data.slice();
  }

  addData(val) {
    this.data.push(val);
    // this.logService.logStatus('Data Added');
  }
}
