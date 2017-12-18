import { Component, OnInit } from '@angular/core';
import {HomeText} from './home.text';
import { LangService } from '../lang.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  t: HomeText;
  typingOptions: Object;
  typingCursor: any;
  typingStrings: string[];
  typedHomeText: Typed;

  constructor(private lang: LangService) { }

  ngOnInit() {
    this.t = this.lang.getHomeText();
    this.typingCursor = document.getElementById('homeTypedTextCursor');
    this.makeTyping();
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
