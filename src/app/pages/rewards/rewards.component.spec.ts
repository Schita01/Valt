import { ComponentFixture, TestBed } from '@angular/core/testing';

import { rewardsComponent } from './rewards.component';

describe('ServicesComponent', () => {
  let component: rewardsComponent;
  let fixture: ComponentFixture<rewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ rewardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(rewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
