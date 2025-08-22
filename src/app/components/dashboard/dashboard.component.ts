import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LiveWebinarsSectionComponent } from '../live-webinars-section/live-webinars-section.component';
import { UpcomingWebinarsSectionComponent } from '../upcoming-webinars-section/upcoming-webinars-section.component';
import { ForYouWebinarsSectionComponent } from '../for-you-webinars-section/for-you-webinars-section.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,LiveWebinarsSectionComponent,UpcomingWebinarsSectionComponent,ForYouWebinarsSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activeTab: string = 'for-you';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    console.log('Active tab changed to:', tab);
  }
}
