import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevModelComponent } from './dev-model.component';

describe('DevModelComponent', () => {
  let component: DevModelComponent;
  let fixture: ComponentFixture<DevModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
