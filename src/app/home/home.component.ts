import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbAlertModule, NgbCarouselModule, CommonModule, MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
