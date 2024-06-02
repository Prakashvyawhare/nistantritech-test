import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempReportChartComponent } from './temp-report-chart.component';

describe('TempReportChartComponent', () => {
  let component: TempReportChartComponent;
  let fixture: ComponentFixture<TempReportChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempReportChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempReportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
