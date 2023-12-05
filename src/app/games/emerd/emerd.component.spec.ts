import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmerdComponent } from './emerd.component';

describe('EmerdComponent', () => {
  let component: EmerdComponent;
  let fixture: ComponentFixture<EmerdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmerdComponent]
    });
    fixture = TestBed.createComponent(EmerdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
