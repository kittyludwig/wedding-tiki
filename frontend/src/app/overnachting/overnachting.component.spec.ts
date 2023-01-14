import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvernachtingComponent } from './overnachting.component';

describe('OvernachtingFamilieComponent', () => {
  let component: OvernachtingComponent;
  let fixture: ComponentFixture<OvernachtingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvernachtingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvernachtingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
