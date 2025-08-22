import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarCardComponent, WebinarData } from '../webinar-card/webinar-card.component';

@Component({
  selector: 'app-live-webinars-section',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent],
  templateUrl: './live-webinars-section.component.html',
  styleUrls: ['./live-webinars-section.component.scss']
})
export class LiveWebinarsSectionComponent {
  webinars: WebinarData[] = [
    {
      id: '1',
      title: 'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      credits: 2,
      duration: '24:50',
      isLive: true,
      viewerCount: '200+',
      thumbnail: 'assets/images/webinar-1.jpg',
      organizer: {
        name: 'PDGI Indonesia',
        logo: 'assets/images/pdgi-logo.png'
      },
      keyHighlights: [
        'Manage chronic and complex diseases'
      ]
    },
    {
      id: '2',
      title: 'Virus is like any other respiratory virus that causes common',
      credits: 1.5,
      creditsExpiry: 'Expiring in 23h 30m',
      duration: '24:50',
      isLive: true,
      viewerCount: '200+',
      thumbnail: 'assets/images/webinar-2.jpg',
      organizer: {
        name: 'GSK',
        logo: 'assets/images/gsk-logo.png'
      },
      keyHighlights: [
        'Manage chronic and complex diseases'
      ]
    },
    {
      id: '3',
      title: 'Virus is like any other respiratory virus that causes common',
      credits: 2,
      duration: '24:50',
      isLive: true,
      viewerCount: '200+',
      thumbnail: 'assets/images/webinar-3.jpg',
      organizer: {
        name: 'Bayer',
        logo: 'assets/images/bayer-logo.png'
      },
      keyHighlights: [
        'Manage chronic and complex diseases'
      ],
      hasClosedCaptions: true,
      hasMute: true
    }
  ];

  onViewAll(): void {
    console.log('View all webinars clicked');
    // Implement view all functionality
  }
}