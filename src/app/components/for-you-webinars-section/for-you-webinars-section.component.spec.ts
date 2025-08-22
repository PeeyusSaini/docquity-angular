import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForYouWebinarsSectionComponent } from './for-you-webinars-section.component';

describe('ForYouWebinarsSectionComponent', () => {
  let component: ForYouWebinarsSectionComponent;
  let fixture: ComponentFixture<ForYouWebinarsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForYouWebinarsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForYouWebinarsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
