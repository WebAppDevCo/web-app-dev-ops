import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public currentTime = '';

  constructor(private homeService: HomeService) {
    this.homeService.getCurrentTime()
      .subscribe((data: string) => this.currentTime = data);
  }
}
