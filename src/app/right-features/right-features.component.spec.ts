import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightFeaturesComponent } from './right-features.component';

describe('RightFeaturesComponent', () => {
  let component: RightFeaturesComponent;
  let fixture: ComponentFixture<RightFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
