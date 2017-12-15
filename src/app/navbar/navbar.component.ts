import { Component, OnInit } from '@angular/core';
import {NavbarText} from './navbar.text';
import { LangService } from '../lang.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  seifSgBrand = 'SeifSG';
  t: NavbarText; // t for text, easier to use in the html
  constructor(private lang: LangService) { }

  ngOnInit() {
    this.t = this.lang.getNavbarText();
  }
}
