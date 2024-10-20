import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalidendityComponent } from './digitalidendity.component';

describe('DigitalidendityComponent', () => {
  let component: DigitalidendityComponent;
  let fixture: ComponentFixture<DigitalidendityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalidendityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalidendityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
