import { Component, OnInit } from '@angular/core';
import {HomeText} from './home.text';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  t: HomeText;
  constructor(private lang: LangService) { }

  ngOnInit() {
    this.t = this.lang.getHomeText();
  }

}
