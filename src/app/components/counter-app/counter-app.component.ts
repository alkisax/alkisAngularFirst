import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {
  times: number = 0
  userInput: string = ''

  incrementTimes() {
    this.times++
  }

  decrementTimes(){
    this.times--
  }

  reset(){
    this.times = 0
  }

  onUserInput(event: Event) {
    this.userInput = (<HTMLInputElement>event.target).value
  }
}
