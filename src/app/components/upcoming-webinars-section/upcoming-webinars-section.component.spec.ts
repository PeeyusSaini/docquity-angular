import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingWebinarsSectionComponent } from './upcoming-webinars-section.component';

describe('UpcomingWebinarsSectionComponent', () => {
  let component: UpcomingWebinarsSectionComponent;
  let fixture: ComponentFixture<UpcomingWebinarsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingWebinarsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingWebinarsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
