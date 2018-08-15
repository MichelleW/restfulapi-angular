import { TestBed, inject } from '@angular/core/testing';

import { NinjagoldService } from './ninjagold.service';

describe('NinjagoldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinjagoldService]
    });
  });

  it('should be created', inject([NinjagoldService], (service: NinjagoldService) => {
    expect(service).toBeTruthy();
  }));
});
