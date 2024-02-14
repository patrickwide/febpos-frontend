import { TestBed } from '@angular/core/testing';

import { ProductCommunicationService } from './product-communication.service';

describe('ProductCommunicationService', () => {
  let service: ProductCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
