import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastenComponent } from './gasten.component';

describe('GastenComponent', () => {
  let component: GastenComponent;
  let fixture: ComponentFixture<GastenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
