import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailsPageComponent } from './vehicule-details-page.component';

describe('VehiculeDetailsPageComponent', () => {
  let component: VehiculeDetailsPageComponent;
  let fixture: ComponentFixture<VehiculeDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculeDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
