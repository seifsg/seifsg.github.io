import { Injectable } from '@angular/core';
// Navbar imports
import { NavbarText } from './navbar/navbar.text';
import { NavbarEn } from './navbar/navbar.s.en';

// The service responsible for showing any text on the website
// by language
// languages will be added at a later stage
@Injectable()
export class LangService {
  lang: string;
  constructor() {}

  setLang(l: string) {
    this.lang = l;
  }

  getLang(): string {
    return this.lang;
  }

  getNavbarText(): NavbarText {
    return NavbarEn.init();
  }

}
