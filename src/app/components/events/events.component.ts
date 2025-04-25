import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    {
      name: 'Pasta Making Workshop',
      description: 'Learn to make authentic Italian pasta from scratch with Chef Mario.',
      image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      type: 'Cooking Class',
      location: 'Culinary Institute',
      month: 'May',
      day: '12',
      price: '$35'
    },
    {
      name: 'Street Food Festival',
      description: 'Experience diverse street foods from around the world in one place.',
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      type: 'Food Festival',
      location: 'City Park',
      month: 'May',
      day: '20',
      price: 'Free Entry'
    },
    {
      name: 'Wine & Cheese Pairing',
      description: 'Discover the art of pairing fine wines with artisanal cheeses.',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      type: 'Tasting',
      location: 'Vineyard Estates',
      month: 'Jun',
      day: '05',
      price: '$50'
    },
    {
      name: 'Farmers Market',
      description: 'Shop fresh, local produce directly from farmers and artisans.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      type: 'Market',
      location: 'Downtown Square',
      month: 'Jun',
      day: '10',
      price: 'Free Entry'
    },
    {
      name: 'Sushi Making Class',
      description: 'Master the art of sushi rolling with fresh ingredients.',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      type: 'Cooking Class',
      location: 'Asian Fusion Kitchen',
      month: 'Jun',
      day: '18',
      price: '$40'
    },
    {
      name: 'BBQ & Grill Competition',
      description: 'Watch top grill masters compete for the best BBQ title.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      type: 'Competition',
      location: 'Riverside Park',
      month: 'Jul',
      day: '04',
      price: '$10'
    }
  ];
}
