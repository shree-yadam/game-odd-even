import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameNumberChanged = new EventEmitter<number>();
  gameIntervalTimer;
  gameCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    console.log("Game Started");
    this.gameIntervalTimer = setInterval(() => {
      this.gameCounter++;
      this.gameNumberChanged.emit(this.gameCounter);
    }, 1000);
  }

  onGameStop() {
    console.log("Game Stopped")
    clearInterval(this.gameIntervalTimer);
  }

}
