import { Component, OnInit, Input } from '@angular/core';
import { NavbarText } from '../../lang/en/navbar.text';
import { LangService } from '../lang.service';
import Typed from 'typed.js';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  t: NavbarText; // t for text, easier to use in the html
  @Input() sn: any;
  subBrand: Typed;
  typingOptions: Object;
  typingCursor: any;
  typingStrings: string[];

  constructor(private lang: LangService) { }

  ngOnInit() {
    this.t = this.lang.getNavbarText();
    this.makeTyping();
  }

  makeTyping(): void {
    this.typingCursor = document.getElementById('subBrandCursor');
    this.typingCursor.className = 'hidden';

    this.typingOptions = {
      strings: this.getTypingStrings(),
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 20000,
      autoInsertCss: false,
      showCursor: false,
      loop: false,
      onBegin: (self) => {
        setTimeout(() => {
          this.typingCursor.className = 'typed-cursor';
        }, self.options.startDelay - 500);
      },
      onComplete: (a, self) => {
        setTimeout(() => {
        this.typingCursor.className = 'typed-fade-out';
        this.restartTyping();
        }, 1000);
      }
    };
    this.startTyping();
  }

  startTyping(): void {
    this.subBrand = new Typed('.subBrand', this.typingOptions);
  }

  restartTyping(): void {
    // Assign new options after first typing
    this.typingOptions['strings'] = this.getTypingStrings();
    this.typingOptions['startDelay'] = this.typingOptions['startDelay'] ? this.typingOptions['startDelay'] + 5000 : 15000 ;
    // Restart typing with new string each time
    this.subBrand = new Typed('.subBrand', this.typingOptions);
  }

  getTypingStrings(): string[] {
    // keep the first one as default
    // then each time type a different text
    let first: string;
    let rest: string[];
    [first, ...rest] = this.t.subBrand;
    return [first, rest[Math.floor(Math.random() * rest.length)]];
  }

}
