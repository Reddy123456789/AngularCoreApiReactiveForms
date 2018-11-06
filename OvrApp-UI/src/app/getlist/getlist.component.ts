import { EligibilityService } from './../services/eligibility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getlist',
  templateUrl: './getlist.component.html',
  styleUrls: ['./getlist.component.css']
})
export class GetlistComponent implements OnInit {

  passid: any;
  customers: any;
  getcustomer: any;

  constructor(private service: EligibilityService) { }

  ngOnInit() {
    this.getCustomers();
   // this.getCustomer();
  }

  getCustomers() {

    this.service.getAllEligibility('http://localhost:5000/api/customer/getAllCustomers').subscribe( response => {
      this.customers = response;
       console.log(this.customers);
      // this.savecustomerform.reset();
      }, error => {
        console.log(error);
      }
    );
     }

  //    getCustomer() {
  //     this.service.getOneEligibility(45).subscribe( response => {
  //     // this.service.getOneCustomer(this.passid).subscribe( response => {
  //       this.getcustomer = response;
  //       console.log(this.getcustomer);
  //    // this.savecustomerform.reset();
  //    }, error => {
  //      console.log(error);
  //    }
  //  );
  //  }

}
