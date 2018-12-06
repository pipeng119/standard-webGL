import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplycationComponent } from './applycation.component';

describe('ApplycationComponent', () => {
  let component: ApplycationComponent;
  let fixture: ComponentFixture<ApplycationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplycationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplycationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
