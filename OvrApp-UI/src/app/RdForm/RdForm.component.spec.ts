/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RdFormComponent } from './RdForm.component';

describe('RdFormComponent', () => {
  let component: RdFormComponent;
  let fixture: ComponentFixture<RdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
