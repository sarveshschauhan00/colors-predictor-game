import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BconeComponent } from './bcone.component';

describe('BconeComponent', () => {
  let component: BconeComponent;
  let fixture: ComponentFixture<BconeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BconeComponent]
    });
    fixture = TestBed.createComponent(BconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
