import { EligibilityService } from './../services/eligibility.service';
import { IEligibility } from './../model/eligibility';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  dataSaved = false;
  eligibilityForm: FormGroup;
  allEligibility$: Observable<IEligibility[]>;

  constructor(private formBuilder: FormBuilder, private eligibilityService: EligibilityService) { }

  ngOnInit() {
    this.eligibilityForm = this.formBuilder.group({
      IsCitizen: ['', [ Validators.required ] ],
      IsFelon: ['', [ Validators.required ] ],
      IsMentalIncomp: ['', [ Validators.required ] ],
      NewRegistration: ['', [ Validators.required ] ],
      RecordUpdate: ['', [ Validators.required ] ],
      RequesttoReplace: ['', [ Validators.required ] ],
      DLNumber: ['', [ Validators.required ] ],
      LastSSN: ['', [ Validators.required ] ],
      IssueDate: ['', [ Validators.required ] ],
      LastName: ['', [ Validators.required ] ],
      Firstname: ['', [ Validators.required ] ],
      MiddleName: ['', [ Validators.required ] ],
    });
    this.saveEligibility();

  }

  onFormSubmit() {
    this.dataSaved = false;
    const eligibility = this.eligibilityForm.value;
    this.eligibilityService.getAllEligibility('').subscribe(eligibilitys => {
      this.createEligibility(eligibility);
    });
    this.eligibilityForm.reset();
  }

  createEligibility(eligibility: IEligibility) {
    this.eligibilityService.addEligibility(eligibility).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      eligibility => {
        console.log(eligibility);
        this.dataSaved = true;
        this.loadAllEligibilitys();
      },
      err => {
        console.log(err);
      }
    );
  }
  loadAllEligibilitys() {
    this.allEligibility$ = this.eligibilityService.getAllEligibility('');
 }

//  get IsCitizen() {
//   return this.eligibilityForm.get('IsCitizen');
// }
// get IsFelon() {
//   return this.eligibilityForm.get('IsFelon');
// }
// get IsMentalIncomp() {
//   return this.eligibilityForm.get('IsMentalIncomp');
// }
// get NewRegistration() {
//   return this.eligibilityForm.get('NewRegistration');
// }
// get RecordUpdate() {
//   return this.eligibilityForm.get('RecordUpdate');
// }
// get RequesttoReplace() {
//   return this.eligibilityForm.get('RequesttoReplace');
// }
// get DLNumber() {
//   return this.eligibilityForm.get('DLNumber');
// }
// get LastSSN() {
//   return this.eligibilityForm.get('LastSSN');
// }
// get IssueDate() {
//   return this.eligibilityForm.get('IssueDate');
// }
// get LastName() {
//   return this.eligibilityForm.get('LastName');
// }
// get Firstname() {
//   return this.eligibilityForm.get('Firstname');
// }
// get MiddleName() {
//   return this.eligibilityForm.get('MiddleName');
// }
// get Suffix() {
//   return this.eligibilityForm.get('Suffix');
// }
saveEligibility() {
//  const eligibility = {id: '3', IsCitizen: 'true',
//  IsFelon: 'false', IsMentalIncomp: 'false', NewRegistration: 'true', RecordUpdate: 'true',
//  RequesttoReplace: 'false', DLNumber: 'A1234569879', LastSSN: '7894', IssueDate: '12/12/2007',
//  LastName: 'LastName', Firstname: 'FirstName', MiddleName: 'MiddleName', Suffix: 'Mr', Dob: '12/12/1981'};
// const eligibility = {id: '3', IsCitizen: 'true',
//  IsFelon: 'false', IsMentalIncomp: 'false', NewRegistration: 'true', RecordUpdate: 'true',
//  RequesttoReplace: 'false', DLNumber: 'A1234569879', LastSSN: '7894',
//  LastName: 'LastName', Firstname: 'FirstName', MiddleName: 'MiddleName', Suffix: 'Mr'};
 const eligibility = this.eligibilityForm.value;
     this.eligibilityService.postEligibility(eligibility).subscribe(res => {
          const eligi: IEligibility = res.body;
          console.log(eligi.IsCitizen);
          console.log(eligi.IsFelon);
          console.log(eligi.IsMentalIncomp);
          // console.log(eligi.NewRegistration);
          // console.log(eligi.RecordUpdate);
          // console.log(eligi.RequesttoReplace);
          console.log(eligi.DLNumber);
          console.log(eligi.LastSSN);
          // console.log(eligi.IssueDate);
          console.log(eligi.LastName);
          console.log(eligi.Firstname);
          console.log(eligi.MiddleName);
          console.log(eligi.Suffix);
          // console.log(eligi.Dob);
          console.log(res.headers.get('Content-Type'));
          this.loadAllEligibilitys();
        },
(err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        }
     );
}

}
