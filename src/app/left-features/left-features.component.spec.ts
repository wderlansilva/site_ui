import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFeaturesComponent } from './left-features.component';

describe('LeftFeaturesComponent', () => {
  let component: LeftFeaturesComponent;
  let fixture: ComponentFixture<LeftFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
