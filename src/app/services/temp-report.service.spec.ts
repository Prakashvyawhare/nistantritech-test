import { TestBed } from '@angular/core/testing';

import { TempReportService } from './temp-report.service';

describe('TempReportService', () => {
  let service: TempReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
