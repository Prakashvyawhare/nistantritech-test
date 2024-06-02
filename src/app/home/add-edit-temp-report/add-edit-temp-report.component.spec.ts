import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTempReportComponent } from './add-edit-temp-report.component';

describe('AddEditTempReportComponent', () => {
  let component: AddEditTempReportComponent;
  let fixture: ComponentFixture<AddEditTempReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTempReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTempReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
