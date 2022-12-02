import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
declare var $: any;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  panelOpenState = false;
}
