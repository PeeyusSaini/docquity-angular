import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent, WebinarData } from '../webinar-card/webinar-card.component';

@Component({
  selector: 'app-upcoming-webinars-section',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent],
  templateUrl: './upcoming-webinars-section.component.html',
  styleUrls: ['./upcoming-webinars-section.component.scss']
})
export class UpcomingWebinarsSectionComponent {
  upcomingWebinars: WebinarData[] = [
    {
      id: '4',
      title: 'The Covid19 Management of Parox Health caretine',
      credits: 1.5,
      creditsExpiry: 'Expiring in 20 days',
      isLive: false,
      isUpcoming: true,
      thumbnail: 'assets/images/webinar-1.png',
      organizer: {
        name: 'PDGI Indonesia',
        logo: 'assets/images/pdgi-logo.png'
      },
      keyHighlights: [
        'Manage chronic and complex diseases'
      ],
      scheduledDate: '7 Jan 2025',
      scheduledTime: '12:30 PM',
      hasRegisterButton: true,
      hasNotifyButton: true,
      isRegistered: false,
      isNotificationSet: false
    },
    {
      id: '5',
      title: 'Perspectives in The Covid19 Management of Parox Health',
      credits: 2,
      isLive: false,
      isUpcoming: true,
      thumbnail: 'assets/images/webinar-2.png',
      organizer: {
        name: 'PDGI Indonesia',
        logo: 'assets/images/pdgi-logo.png'
      },
      keyHighlights: [
        'Manage chronic and complex diseases'
      ],
      scheduledDate: '7 Jan 2025',
      scheduledTime: '12:30 PM',
      hasRegisterButton: true,
      hasNotifyButton: true,
      isRegistered: false,
      isNotificationSet: false
    },
    {
      id: '6',
      title: 'The Covid19 Management of Parox Health caretine',
      credits: 2,
      isLive: false,
      isUpcoming: true,
      thumbnail: 'assets/images/webinar-3.jpg',
      organizer: {
        name: 'PDGI Indonesia',
        logo: 'assets/images/pdgi-logo.png'
      },
      keyHighlights: [
        'Manage chronic and complex diseases'
      ],
      scheduledDate: '7 Jan 2025',
      scheduledTime: '12:30 PM',
      hasRegisterButton: true,
      hasNotifyButton: true,
      isRegistered: false,
      isNotificationSet: false
    }
  ];

  onViewAll(): void {
    console.log('View all upcoming webinars clicked');
    // Implement view all functionality
  }
}