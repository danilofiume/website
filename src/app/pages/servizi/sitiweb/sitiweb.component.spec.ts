import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiwebComponent } from './sitiweb.component';

describe('SitiwebComponent', () => {
  let component: SitiwebComponent;
  let fixture: ComponentFixture<SitiwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SitiwebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitiwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
