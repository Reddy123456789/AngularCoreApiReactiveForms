/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EligibilityService } from './eligibility.service';

describe('Service: Eligibility', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EligibilityService]
    });
  });

  it('should ...', inject([EligibilityService], (service: EligibilityService) => {
    expect(service).toBeTruthy();
  }));
});
