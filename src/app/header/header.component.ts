import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  menuItems:any=[];
  constructor() {
    this.menuItems = [
      {
          name: 'Build A Dream',
          url: '/build-a-dream'
      },
      
      {
          name: 'Inspire',
          url: '/resources'
      },
      {
          name: 'Community',
          url: '/my-account'
      },
      {
        name: 'My Dreams',
        url: '/dreams'
    },
      {
          name: 'Login',
          url: '/layout'
      }
  ];
  }
  
  
}
