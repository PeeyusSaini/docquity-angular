import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebinarCardComponent, WebinarData } from '../webinar-card/webinar-card.component';

export interface SpeakerData {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
  isLive?: boolean;
}

export interface TopicData {
  name: string;
  count: number;
}

export interface WebinarPost {
  id: string;
  title: string;
  credits: number;
  creditsExpiry?: string;
  thumbnail: string;
  duration?: string;
  organizer: {
    name: string;
    logo: string;
  };
  sponsor: string;
  followers: string;
  timeAgo: string;
  keyHighlights: string[];
  likes: number;
  comments: number;
  views: string;
  isLiked: boolean;
  isFollowing: boolean;
}

@Component({
  selector: 'app-for-you-webinars-section',
  standalone: true,
  imports: [CommonModule, WebinarCardComponent, FormsModule],
  templateUrl: './for-you-webinars-section.component.html',
  styleUrls: ['./for-you-webinars-section.component.scss']
})
export class ForYouWebinarsSectionComponent {
  selectedSpecialty: string = '';
  
  cardiologyWebinars: WebinarData[] = [
    {
      id: 'card1',
      title: 'More Than Skin Deep: Treating Eczema and Allergy',
      credits: 2,
      isLive: false,
      isUpcoming: false,
      thumbnail: 'assets/images/webinar-1.png',
      organizer: {
        name: 'Columbia Asia',
        logo: 'assets/images/columbia-asia-logo.png'
      },
      keyHighlights: [],
      duration: '24:50'
        },
    {
      id: 'card2',
      title: '101 Hal tentang PPDS Bedah Umum FKU1 dan Karir Bedah Umum',
      credits: 3,
      isLive: false,
      isUpcoming: false,
      thumbnail: 'assets/images/webinar-2.png',
      organizer: {
        name: 'Medical Institution',
        logo: 'assets/images/medical-logo.png'
      },
      keyHighlights: [],
      duration: '24:50'
    },
    {
      id: 'card3',
      title: 'Metapneumovirus is like any other respiratory virus that causes common',
      credits: 1.5,
      creditsExpiry: 'till 15 Dec 2024',
      isLive: true,
      isUpcoming: false,
      thumbnail: 'assets/images/webinar-3.jpg',
      organizer: {
        name: 'Bayer Indonesia',
        logo: 'assets/images/bayer-logo.png'
      },
      keyHighlights: [],
      duration: '24:50',
      viewerCount: '200+'
    }
  ];

  topSpeakers: SpeakerData[] = [
    {
      id: 'sp1',
      name: 'Dr Chong wui',
      specialty: 'Gastrologist, General Phys...',
      avatar: 'assets/images/webinar-1.png',
      isLive: true
    },
    {
      id: 'sp2',
      name: 'Dr Wuyama Guramg',
      specialty: 'Gastroenterologist, Surgeon',
       avatar: 'assets/images/webinar-1.png',
    },
    {
      id: 'sp3',
      name: 'Dr Wuyama Guramg',
      specialty: 'Gastroenterologist, Surgeon',
      avatar: 'assets/images/webinar-1.png',
    },
    {
      id: 'sp4',
      name: 'Dr Wuyama Guramg',
      specialty: 'Cardiologist',
      avatar: 'assets/images/webinar-1.png',
    }
  ];

  topicsRow1: TopicData[] = [
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'General Medicine', count: 4 }
  ];

  topicsRow2: TopicData[] = [
    { name: 'Emergency Medicine', count: 8 },
    { name: 'Cardiologist', count: 4 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'Cardiologist', count: 4 }
  ];

  specialties: string[] = [
    'Acupuncture',
    'Allergy and Immunology',
    'Anaesthesiology',
    'Clinical Nutrition',
    'General Practitioner'
  ];
filters = {
  acupuncture: false,
  allergy: false,
  anaesthesiology: false,
  clinicalNutrition: false,
  generalPractitioner: false
};

// Update webinarFeed to have only 4 items for 2x2 grid
webinarFeed: WebinarPost[] = [
  {
    id: 'feed1',
    title: 'Perspectives in The Covid19 Management of Parox Health caretine',
    credits: 1.5,
    creditsExpiry: 'Expiring in 23h 30m',
    thumbnail: 'assets/images/webinar-1.png',
    duration: '24:50',
    organizer: {
      name: 'PDGI Indonesia',
      logo: 'assets/images/pdgi-logo.png'
    },
    sponsor: 'Roche',
    followers: '2845',
    timeAgo: '30 min ago',
    keyHighlights: [
      'Manage chronic and complex diseases'
    ],
    likes: 20,
    comments: 12,
    views: '750 Views',
    isLiked: false,
    isFollowing: false
  },
  {
    id: 'feed2',
    title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
    credits: 2,
    creditsExpiry: 'Expiring in 12 days',
    thumbnail: 'assets/images/webinar-2.png',
    duration: '24:50',
    organizer: {
      name: 'PDGI Indonesia',
      logo: 'assets/images/pdgi-logo.png'
    },
    sponsor: 'Roche',
    followers: '2845',
    timeAgo: '30 min ago',
    keyHighlights: [
      'Manage chronic and complex diseases'
    ],
    likes: 20,
    comments: 12,
    views: '750 Views',
    isLiked: false,
    isFollowing: false
  },
  {
    id: 'feed3',
    title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
    credits: 2,
    creditsExpiry: 'Expiring in 12 days',
    thumbnail: 'assets/images/webinar-3.jpg',
    duration: '24:50',
    organizer: {
      name: 'PDGI Indonesia',
      logo: 'assets/images/pdgi-logo.png'
    },
    sponsor: 'Roche',
    followers: '2845',
    timeAgo: '30 min ago',
    keyHighlights: [
      'Manage chronic and complex diseases'
    ],
    likes: 20,
    comments: 12,
    views: '750 Views',
    isLiked: false,
    isFollowing: false
  },
  {
    id: 'feed4',
    title: 'The Covid19 Management of Parox Health caretine',
    credits: 3,
    thumbnail: 'assets/images/webinar-2.png',
    duration: '24:50',
    organizer: {
      name: 'PDGI Indonesia',
      logo: 'assets/images/pdgi-logo.png'
    },
    sponsor: 'Roche',
    followers: '2845',
    timeAgo: '30 min ago',
    keyHighlights: [
      'Manage chronic and complex diseases'
    ],
    likes: 20,
    comments: 12,
    views: '750 Views',
    isLiked: false,
    isFollowing: false
  }
];

// Add filter methods if needed
onFilterChange(): void {
  console.log('Filters changed:', this.filters);
  // Implement filter logic here
}
  onViewAllCardiology(): void {
    console.log('View all cardiology webinars clicked');
  }

  onViewAllSpeakers(): void {
    console.log('View all speakers clicked');
  }

  onViewAllTopics(): void {
    console.log('View all topics clicked');
  }

  onSpeakerClick(speaker: SpeakerData): void {
    console.log('Speaker clicked:', speaker);
  }

  onTopicClick(topic: TopicData): void {
    console.log('Topic clicked:', topic);
  }

  onSpecialtyChange(): void {
    console.log('Specialty filter changed:', this.selectedSpecialty);
  }

  toggleFollow(post: WebinarPost): void {
    post.isFollowing = !post.isFollowing;
    console.log('Follow toggled for:', post.title);
  }

  onMoreOptions(post: WebinarPost): void {
    console.log('More options clicked for:', post.title);
  }

  toggleLike(post: WebinarPost): void {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
    console.log('Like toggled for:', post.title);
  }

  onComment(post: WebinarPost): void {
    console.log('Comment clicked for:', post.title);
  }

  onRepost(post: WebinarPost): void {
    console.log('Repost clicked for:', post.title);
  }

  onShare(post: WebinarPost): void {
    console.log('Share clicked for:', post.title);
  }
}