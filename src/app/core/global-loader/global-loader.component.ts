import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalLoaderService } from 'src/app/services/global-loader.service';

@Component({
  selector: 'app-global-loader',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.scss']
})
export class GlobalLoaderComponent {

  imageSrc = "";
  constructor(public loader: GlobalLoaderService) {
    this.imageSrc = window.location.origin;
  }
}
