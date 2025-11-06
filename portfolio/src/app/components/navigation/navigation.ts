import { Component, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  activeSection = 'home';
  isBrowser: boolean;

  menuItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'experiences', label: 'Experiences', icon: 'work' },
    { id: 'education', label: 'Education', icon: 'school' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'honors', label: 'Honors and Awards', icon: 'emoji_events' },
    { id: 'languages', label: 'Languages', icon: 'language' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  toggleMenu() {
    this.sidenav.toggle();
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    if (!this.isBrowser) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close sidenav after clicking
    this.sidenav.close();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isBrowser) return;

    const sections = ['home', 'experiences', 'education', 'skills', 'honors', 'languages'];
    const scrollY = window.pageYOffset;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  get isSmallScreen(): boolean {
    return this.isBrowser && window.innerWidth < 768;
  }
}
