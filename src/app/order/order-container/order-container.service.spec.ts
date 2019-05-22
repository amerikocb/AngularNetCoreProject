import { TestBed } from '@angular/core/testing';

import { OrderContainerService } from './order-container.service';

describe('OrderContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderContainerService = TestBed.get(OrderContainerService);
    expect(service).toBeTruthy();
  });
});
