import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastenDetailComponent } from './gasten-detail.component';

describe('GastenDetailComponent', () => {
  let component: GastenDetailComponent;
  let fixture: ComponentFixture<GastenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastenDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
