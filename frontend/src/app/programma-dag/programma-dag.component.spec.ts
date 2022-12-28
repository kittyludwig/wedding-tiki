import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaDagComponent } from './programma-dag.component';

describe('ProgrammaDagComponent', () => {
  let component: ProgrammaDagComponent;
  let fixture: ComponentFixture<ProgrammaDagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammaDagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammaDagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
