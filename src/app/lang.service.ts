import { Injectable } from '@angular/core';
// Navbar imports
import { NavbarText } from '../lang/en/navbar.text';
import { NavbarEn } from '../lang/en/navbar.s.en';

// Home imports
import { HomeText } from '../lang/en/home.text';
import { HomeEn } from '../lang/en/home.s.en';

// Footer imports
import { FooterText } from '../lang/en/footer.text';
import { FooterEn } from '../lang/en/footer.s.en';

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

  getFooterText(): FooterText {
    return FooterEn.init();
  }

}
