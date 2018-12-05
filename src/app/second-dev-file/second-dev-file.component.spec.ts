import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDevFileComponent } from './second-dev-file.component';

describe('SecondDevFileComponent', () => {
  let component: SecondDevFileComponent;
  let fixture: ComponentFixture<SecondDevFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDevFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDevFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
