import { Component, OnInit } from '@angular/core';
import { EligibilityService } from '../services/eligibility.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-revieweligibility',
  templateUrl: './revieweligibility.component.html',
  styleUrls: ['./revieweligibility.component.css']
})
export class RevieweligibilityComponent implements OnInit {
  public getcustomer: any;
  constructor(private service: EligibilityService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const contactData = this.service.sharedEligibility;
   // console.log(contactData);
    this.getcustomer = contactData;
    console.log(this.getcustomer);
  }
  navigatetoRd() {
    this.router.navigateByUrl('/rdform');
}
}
