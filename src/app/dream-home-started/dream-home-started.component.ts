import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dream-home-started',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dream-home-started.component.html',
  styleUrls: ['./dream-home-started.component.scss']
})
export class DreamHomeStartedComponent {

  @Output() navigateToLowerMonthlyIncomeEvent = new EventEmitter<any>();
  @Output() navigateToCashFromEquitycomeEvent = new EventEmitter<any>();
  navigateTolowerMonthlyIncome(){

    this.navigateToLowerMonthlyIncomeEvent.emit();

  }

  navigateTogetCashFromEquity(){

    this.navigateToCashFromEquitycomeEvent.emit();

  }

}
