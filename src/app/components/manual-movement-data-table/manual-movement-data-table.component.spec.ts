import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualMovementDataTableComponent } from './manual-movement-data-table.component';

describe('ManualMovementDataTableComponent', () => {
  let component: ManualMovementDataTableComponent;
  let fixture: ComponentFixture<ManualMovementDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualMovementDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualMovementDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
