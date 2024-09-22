import { Component, OnInit } from '@angular/core';
import * as questions from './../../db/quiz.json';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})

export class QuizComponent implements OnInit {

  quiz = questions
  index = 0

  guessAnswer(value: boolean) {
    this.index += 1
    if(value) {
      alert('Acertou!')
      return
    }
    alert('Errou!')
  }

  ngOnInit(): void {
    console.log(this.quiz)
    console.log(this.quiz)
  }
}
