import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface WebinarData {
  id: string;
  title: string;
  credits: number;
  creditsExpiry?: string;
  duration?: string;
  isLive: boolean;
  isUpcoming?: boolean;
  viewerCount?: string;
  thumbnail: string;
  organizer: {
    name: string;
    logo: string;
  };
  keyHighlights: string[];
  hasClosedCaptions?: boolean;
  hasMute?: boolean;
  // New fields for upcoming webinars
  scheduledDate?: string;
  scheduledTime?: string;
  hasRegisterButton?: boolean;
  hasNotifyButton?: boolean;
  isRegistered?: boolean;
  isNotificationSet?: boolean;
}

@Component({
  selector: 'app-webinar-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './webinar-card.component.html',
  styleUrls: ['./webinar-card.component.scss']
})
export class WebinarCardComponent {
  @Input() webinar!: WebinarData;
  @Input() showWatchButton: boolean = true;
  @Input() cardType: 'live' | 'upcoming' = 'live';

  onWatchNow(): void {
    console.log('Watch webinar:', this.webinar.id);
    // Implement watch functionality
  }

  onRegisterNow(): void {
    console.log('Register for webinar:', this.webinar.id);
    this.webinar.isRegistered = true;
    // Implement register functionality
  }

  onNotifyMe(): void {
    console.log('Set notification for webinar:', this.webinar.id);
    this.webinar.isNotificationSet = !this.webinar.isNotificationSet;
    // Implement notification functionality
  }
}