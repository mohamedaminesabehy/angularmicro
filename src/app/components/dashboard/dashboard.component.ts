import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  featuredRestaurants = [
    {
      name: 'Pasta Paradise',
      cuisine: 'Italian, Mediterranean',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      rating: 4.8,
      deliveryTime: '25-35 min',
      priceRange: '$$'
    },
    {
      name: 'Spice Garden',
      cuisine: 'Indian, Asian',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      rating: 4.6,
      deliveryTime: '30-40 min',
      priceRange: '$$'
    },
    {
      name: 'Burger Joint',
      cuisine: 'American, Fast Food',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      rating: 4.5,
      deliveryTime: '15-25 min',
      priceRange: '$'
    },
    {
      name: 'Sushi Express',
      cuisine: 'Japanese, Sushi',
      image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      rating: 4.7,
      deliveryTime: '20-30 min',
      priceRange: '$$$'
    }
  ];

  popularMenuItems = [
    {
      name: 'Classic Burger',
      description: 'Beef patty with lettuce, tomato, cheese, and special sauce',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      price: 8.99,
      vegetarian: false
    },
    {
      name: 'Margherita Pizza',
      description: 'Fresh tomatoes, mozzarella cheese, and basil on thin crust',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      price: 12.99,
      vegetarian: true
    },
    {
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan cheese with Caesar dressing',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      price: 7.99,
      vegetarian: true
    },
    {
      name: 'Chicken Alfredo',
      description: 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken',
      image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      price: 14.99,
      vegetarian: false
    }
  ];

  upcomingEvents = [
    {
      name: 'Annual Food & Wine Festival',
      description: 'Join us for the biggest culinary event of the year featuring top chefs, wine tastings, cooking demonstrations, and more!',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      date: 'June 15-18, 2023',
      location: 'Downtown Convention Center',
      price: '$45'
    },
    {
      name: 'Pasta Making Workshop',
      description: 'Learn to make authentic Italian pasta from scratch with Chef Mario.',
      image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
      date: 'May 12, 2023',
      location: 'Culinary Institute',
      price: '$35'
    }
  ];
}
