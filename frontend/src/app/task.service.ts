import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqSer: WebReqService) {}

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqSer.post('lists', { title });
  }
}
