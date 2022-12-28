import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvernachtingFamilieComponent } from './overnachting-familie.component';

describe('OvernachtingFamilieComponent', () => {
  let component: OvernachtingFamilieComponent;
  let fixture: ComponentFixture<OvernachtingFamilieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvernachtingFamilieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvernachtingFamilieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
