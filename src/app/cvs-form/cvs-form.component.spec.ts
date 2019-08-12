import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvsFormComponent } from './cvs-form.component';

describe('CvsFormComponent', () => {
  let component: CvsFormComponent;
  let fixture: ComponentFixture<CvsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
