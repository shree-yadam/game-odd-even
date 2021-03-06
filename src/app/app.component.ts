import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gameCountArray: number[] = [];

  onGameNumberChanged(gameCounter: number){
    this.gameCountArray.push(gameCounter);
  }
}
