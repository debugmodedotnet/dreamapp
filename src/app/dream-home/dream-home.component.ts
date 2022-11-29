import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dream-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dream-home.component.html',
  styleUrls: ['./dream-home.component.scss']
})
export class DreamHomeComponent {


  showHome = true; 
  @ViewChild('homecontainer',{static:true,read:ViewContainerRef}) container?: ViewContainerRef;

  async loadDreamHomeStarted(){

    this.showHome = false; 
    this.container?.clear();
    const {DreamHomeStartedComponent} = await import('../dream-home-started/dream-home-started.component');
    let a = this.container?.createComponent(DreamHomeStartedComponent);

  }

}
