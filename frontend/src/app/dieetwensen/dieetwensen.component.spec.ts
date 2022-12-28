import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieetwensenComponent } from './dieetwensen.component';

describe('DieetwensenComponent', () => {
  let component: DieetwensenComponent;
  let fixture: ComponentFixture<DieetwensenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieetwensenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieetwensenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
