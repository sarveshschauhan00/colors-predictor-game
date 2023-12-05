import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBetDialogComponent } from './make-bet-dialog.component';

describe('MakeBetDialogComponent', () => {
  let component: MakeBetDialogComponent;
  let fixture: ComponentFixture<MakeBetDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeBetDialogComponent]
    });
    fixture = TestBed.createComponent(MakeBetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
