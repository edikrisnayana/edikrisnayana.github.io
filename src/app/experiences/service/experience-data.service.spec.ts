import { TestBed } from '@angular/core/testing';

import { ExperienceDataService } from './experience-data.service';

describe('ExperienceDataService', () => {
  let service: ExperienceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
