import { Injectable } from '@angular/core';
// Navbar imports
import { NavbarText } from './navbar/navbar.text';
import { NavbarEn } from './navbar/navbar.s.en';

// Home imports
import { HomeText } from './home/home.text';
import { HomeEn } from './home/home.s.en';

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

  getHomeText(): HomeText {
    return HomeEn.init();
  }

}
