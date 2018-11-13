import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { EligibilityService } from './services/eligibility.service';
import { EligibilityreactiveComponent } from './eligibilityreactive/eligibilityreactive.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetlistComponent } from './getlist/getlist.component';
import { FooterComponent } from './footer/footer.component';
import { RevieweligibilityComponent } from './revieweligibility/revieweligibility.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RdFormComponent } from './RdForm/RdForm.component';

@NgModule({
   declarations: [
      AppComponent,
      EligibilityComponent,
      EligibilityreactiveComponent,
      HeaderComponent,
      GetlistComponent,
      FooterComponent,
      RevieweligibilityComponent,
      RdFormComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      // BsDatepickerModule.forRoot(),
      BrowserAnimationsModule,
      AppMaterialModule,
      NgxMaskModule.forRoot(),
      RecaptchaModule,
      RecaptchaFormsModule
   ],
   providers: [
      EligibilityService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
