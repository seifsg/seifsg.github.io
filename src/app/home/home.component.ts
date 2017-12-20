import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HomeText} from './home.text';
import { LangService } from '../lang.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: Observable<string>;

  t: HomeText;
  typingOptions: Object;
  typingCursor: any;
  typingStrings: string[];
  typedHomeText: Typed;

  constructor(private lang: LangService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.t = this.lang.getHomeText();
    this.typingCursor = document.getElementById('homeTypedTextCursor');
    this.makeTyping();

    // Capture the fragment if available
    this.token = this.route.fragment.map(f => f || 'None');

    this.route.fragment
                .subscribe(fragment => {
                    const el = document.getElementById(fragment);
                    if (el) {
                      el.scrollIntoView();
                    }else {
                      window.scrollTo(0, 0);
                    }
                });
  }


  makeTyping(): void {

    this.typingOptions = {
      strings: this.getTypingString(),
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 0,
      autoInsertCss: false,
      showCursor: false,
      onBegin: (self) => {
        this.typingCursor.className = 'typed-cursor';
      },
      onComplete: (a, self) => {
        setTimeout(() => {
        this.typingCursor.className = 'typed-fade-out';
        }, 1500);
        document.getElementById('availableButton').style.display = 'inline-block';
        document.getElementById('availableButton').classList.add('bounceIn');
      }
    };

    this.typedHomeText = new Typed('.homeTypedText', this.typingOptions);
  }

  getTypingString(): string[] {
    return [ this.t.typingStrings[Math.floor(Math.random() * this.t.typingStrings.length)] ];
  }
}
