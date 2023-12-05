import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapreComponent } from './sapre.component';

describe('SapreComponent', () => {
  let component: SapreComponent;
  let fixture: ComponentFixture<SapreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SapreComponent]
    });
    fixture = TestBed.createComponent(SapreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
