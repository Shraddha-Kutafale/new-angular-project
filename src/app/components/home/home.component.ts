import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { IMobilePhones, MobilePhones } from '../mobile-phones';
import { HeadPhones, IHeadPhones } from '../head-phones';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mobilePhones: IMobilePhones[] = MobilePhones;
  headPhones: IHeadPhones[] = HeadPhones;

  // Variable to track selected category
  selectedCategory: 'MobilePhones' | 'HeadPhones' | null = null;

  currentSlideIndex: number = 0;
  slides: string[] = [
    'img2.jpg', 
    'img3.jpg', 
    'img4.jpg', 
    'img5.jpg'
  ];
  private intervalId: any;

  logos = [
    { src: 'dell-logo.jpg', alt: 'Dell' },
    { src: 'canon-logo.jpg', alt: 'Canon' },
    { src: 'lenovo-logo.jpg', alt: 'Lenovo' },
    { src: 'olg-logo.jpg', alt: 'Apple' },
    { src: 'disnep-logo.jpg', alt: 'Disney' },
    { src: 'titan-logo.jpg', alt: 'Titan' }
  ];
  currentLogoSlideIndex = 0;
  
  ngOnInit() {
    this.startSlideshow();
    setInterval(() => { this.nextLogoSlide(); }, 3000);
  }

  // Method to change the selected category
  selectCategory(category: 'MobilePhones' | 'HeadPhones') {
    this.selectedCategory = category;
  }

  isCategorySelected() {
    return this.selectedCategory !== null;
  }

  currentSlide(index: number) {
    this.currentSlideIndex = index;
  }

  // Move to the next slide
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // Start the automatic slideshow
  startSlideshow() {
    this.intervalId = setInterval(() => this.nextSlide(), 3000);
  }

  // Stop the automatic slideshow
  stopSlideshow() {
    clearInterval(this.intervalId);
  }

  currentLogoSlide(index: number) {
    this.currentLogoSlideIndex = index;
  }

  nextLogoSlide() {
    this.currentLogoSlideIndex++;
    if (this.currentLogoSlideIndex >= this.logos.length) {
      this.currentLogoSlideIndex = 0;
    }
  }
  ngOnDestroy() {
    this.stopSlideshow();
  }
}
