import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onGameNumberChanged(gameData: {gameCounter: number}){
    console.log("Game Counter: ", gameData.gameCounter);

  }
}
