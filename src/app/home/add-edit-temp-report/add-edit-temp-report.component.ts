import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-temp-report',
  templateUrl: './add-edit-temp-report.component.html',
  styleUrls: ['./add-edit-temp-report.component.scss']
})
export class AddEditTempReportComponent {
  isShowLoader: boolean = false;
  tempForm=new FormGroup({
    date: new FormControl ("",{validators:[Validators.required]}),
    temperature: new FormControl("",{validators:[Validators.required,Validators.min(-50), Validators.max(50)]})
});


onSubmit(){

}


}
