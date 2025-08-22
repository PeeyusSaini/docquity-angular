import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWebinarsSectionComponent } from './live-webinars-section.component';

describe('LiveWebinarsSectionComponent', () => {
  let component: LiveWebinarsSectionComponent;
  let fixture: ComponentFixture<LiveWebinarsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveWebinarsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveWebinarsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
