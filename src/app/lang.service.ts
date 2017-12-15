import { Injectable } from '@angular/core';


// The service responsible for showing any text on the website
// by language
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
}
