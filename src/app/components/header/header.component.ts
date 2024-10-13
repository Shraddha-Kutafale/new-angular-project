import { Component } from '@angular/core';
import { IMobilePhones, MobilePhones } from '../mobile-phones';
import { HeadPhones, IHeadPhones } from '../head-phones';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
