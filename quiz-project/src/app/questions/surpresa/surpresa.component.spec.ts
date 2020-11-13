import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpresaComponent } from './surpresa.component';

describe('SurpresaComponent', () => {
  let component: SurpresaComponent;
  let fixture: ComponentFixture<SurpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
