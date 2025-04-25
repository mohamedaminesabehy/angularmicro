import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserMenuOpen = false;
  
  // Mock user data - in a real app, this would come from a service
  user = {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
  };

  constructor(private router: Router) {}

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  navigateToMyRecipes() {
    this.router.navigate(['/my-recipes']);
    this.isUserMenuOpen = false;
  }

  navigateToMyReviews() {
    this.router.navigate(['/my-reviews']);
    this.isUserMenuOpen = false;
  }

  logout() {
    // In a real app, this would call an authentication service
    console.log('User logged out');
    // Navigate to login page or home
    this.router.navigate(['/']);
    this.isUserMenuOpen = false;
  }
}
