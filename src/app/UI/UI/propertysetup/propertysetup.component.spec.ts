import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROPERTYSETUPComponent } from './propertysetup.component';

describe('PROPERTYSETUPComponent', () => {
  let component: PROPERTYSETUPComponent;
  let fixture: ComponentFixture<PROPERTYSETUPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROPERTYSETUPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PROPERTYSETUPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
