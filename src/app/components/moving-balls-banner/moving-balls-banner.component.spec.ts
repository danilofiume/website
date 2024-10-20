import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingBallsBannerComponent } from './moving-balls-banner.component';

describe('MovingBallsBannerComponent', () => {
  let component: MovingBallsBannerComponent;
  let fixture: ComponentFixture<MovingBallsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingBallsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingBallsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
