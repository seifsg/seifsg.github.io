import { Component, OnInit, Input } from '@angular/core';
import {NavbarText} from '../navbar/navbar.text';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  t: NavbarText; // t for text, easier to use in the html
  constructor(private lang: LangService) { }

  ngOnInit() {
    this.t = this.lang.getNavbarText();
  }

}
