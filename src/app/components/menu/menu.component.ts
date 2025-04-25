import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../../models/menu.model';
import { Restaurant } from '../../models/restaurant.model';
import { MenuService } from '../../services/menu.service';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [];
  restaurant: Restaurant | null = null;
  loading = false;
  errorMessage = '';
  restaurantId: number | null = null;
  selectedMenu: Menu | null = null; // <-- Add this line

  constructor(
    private menuService: MenuService,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['restaurantId']) {
        this.restaurantId = +params['restaurantId'];
        this.loadRestaurantDetails();
        this.loadMenusByRestaurant(this.restaurantId);
      } else {
        this.loadAllMenus();
      }
    });
  }

  loadRestaurantDetails(): void {
    if (this.restaurantId) {
      this.loading = true;
      this.restaurantService.getRestaurantById(this.restaurantId).subscribe({
        next: (data) => {
          this.restaurant = data.restaurant;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching restaurant details', error);
          this.errorMessage = 'Failed to load restaurant details. Please try again later.';
          this.loading = false;
        }
      });
    }
  }

  loadAllMenus(): void {
    this.loading = true;
    this.menuService.getAllMenus().subscribe({
      next: (data) => {
        this.menuItems = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching menus', error);
        this.errorMessage = 'Failed to load menus. Please try again later.';
        this.loading = false;
      }
    });
  }

  loadMenusByRestaurant(restaurantId: number): void {
    this.loading = true;
    this.menuService.getMenusByRestaurantId(restaurantId).subscribe({
      next: (data) => {
        this.menuItems = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching menus for restaurant', error);
        this.errorMessage = 'Failed to load menus for this restaurant. Please try again later.';
        this.loading = false;
      }
    });
  }

  showDetails(menu: Menu): void {
    this.selectedMenu = menu;
  }
}
