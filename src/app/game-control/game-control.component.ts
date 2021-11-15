import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameIntervalTimer;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    console.log("Game Started");
    this.gameIntervalTimer = setInterval(() => {
      console.log("Timer triggered")
    }, 1000);
  }

  onGameStop() {
    console.log("Timer cleared")
    clearInterval(this.gameIntervalTimer);
  }

}
