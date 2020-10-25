import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent implements OnInit {
  sentence: string;
  enteredText: string;
  constructor() {
    this.sentence = lorem.sentence();
    this.enteredText = '';
  }

  ngOnInit(): void {}

  userInputValidation(value: string) {
    this.enteredText = value;
  }

  compare(char: string, enteredText: string): string {
    if (!enteredText) {
      return 'pending';
    }
    return char === enteredText ? "correct" : "false"
  }
}
