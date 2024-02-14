// product-communication.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductCommunicationService {
  productCreated: EventEmitter<void> = new EventEmitter<void>();
}
