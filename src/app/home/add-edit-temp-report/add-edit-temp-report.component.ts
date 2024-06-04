import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TempReportService } from 'src/app/services/temp-report.service';

@Component({
  selector: 'app-add-edit-temp-report',
  templateUrl: './add-edit-temp-report.component.html',
  styleUrls: ['./add-edit-temp-report.component.scss'],
})
export class AddEditTempReportComponent implements OnInit {
  isShowLoader: boolean = false;
  tempForm = new FormGroup({
    date: new FormControl('', { validators: [Validators.required] }),
    temperature: new FormControl('', {
      validators: [
        Validators.required,
        Validators.min(-50),
        Validators.max(50),
      ],
    }),
  });
  reports: Array<any> = [];
  recId: any = 'new';
  constructor(private reportService: TempReportService) {
    this.reportService.behaviorSubject.subscribe((res: any) => {
      this.reports = res;
    });
  }
  ngOnInit(): void {
    this.getReportList();
    
  }

  onSubmit() {
    if (this.tempForm.valid) {
      if (this.recId === 'new') {
        this.reportService.addReport(this.tempForm.value).subscribe({
          next: () => {
            console.log('report added succesfully');
            this.getReportList();
          },
          error: (error) => {
            console.error(error);
          },
        });
      } else {
        this.reportService
          .updateReport(this.recId, this.tempForm.value)
          .subscribe({
            next: (res) => {
              this.getReportList();
            },
            error: (err) => {
              console.error(err);
            },
          });
      }
      // this.tempForm.reset()
    
    } else if (this.tempForm.invalid){
      this.tempForm.markAllAsTouched();
    }
  }
  onDeleteReport(id: any) {
    this.reportService.deleteReport(id).subscribe({
      next: () => {
        this.getReportList();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  onEditReport(id: any) {
    this.reportService.getReport(id).subscribe({
      next: (res: any) => {
        console.log('getreport', res);
        this.recId = res.id;
        this.tempForm.patchValue({
          date: res.date,
          temperature: res.temperature,
        });
      },
    });
  }
  getReportList() {
    this.reportService.getList();
  }
}
