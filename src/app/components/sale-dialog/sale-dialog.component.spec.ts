import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDialogComponent } from './sale-dialog.component';

describe('SaleDialogComponent', () => {
  let component: SaleDialogComponent;
  let fixture: ComponentFixture<SaleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
