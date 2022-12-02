import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GlobalLoaderComponent } from './core/global-loader/global-loader.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DreamMaterialModule } from './material/dream-material/dream-material.module';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[
    GlobalLoaderComponent,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    HomeComponent,
    DreamMaterialModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dream App';
}
