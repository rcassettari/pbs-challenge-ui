import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualMovementInputFormComponent } from './manual-movement-input-form.component';

describe('ManualMovementInputFormComponent', () => {
  let component: ManualMovementInputFormComponent;
  let fixture: ComponentFixture<ManualMovementInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualMovementInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualMovementInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
