import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharrNumberComponent } from './aadharr-number.component';

describe('AadharrNumberComponent', () => {
  let component: AadharrNumberComponent;
  let fixture: ComponentFixture<AadharrNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AadharrNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadharrNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
