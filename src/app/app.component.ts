import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TAREA1';
  public color:string;
  public var1:number;
  public aciertos:number;
  public fallos:number;
  public id:number;
  constructor(){
    this.color = '';
    this.var1 = 0;
    this.aciertos = 0;
    this.fallos = 0;
    this.id = 0;
  }

  cambiarcolor(){
    var random = Math.floor(Math.random() * 4) + 1;
    this.var1 = random;
    if(random == 1){
      this.color = 'red'
    }
    else if(random == 2){
      this.color = 'yellow'
    }
    else if(random == 3){
      this.color = 'green'
    }
    else if(random == 4){
      this.color = 'blue'
    } 
  }

  comprobar(x:number){
    if(this.color == 'blue' && x == 2){
      this.aciertos++
    }
    else if(this.color == 'blue' && x != 2){
      this.fallos++
      alert("Fallaste")
      this.aciertos=0
    }
    else if(this.color == 'red' && x == 0){
      this.aciertos++
    }
    else if(this.color == 'red' && x != 0){
      this.fallos++
      alert("Fallaste")
      this.aciertos=0
    }
    else if(this.color == 'green' && x == 3){
      this.aciertos++
    }
    else if(this.color == 'green' && x != 4){
      this.fallos++
      alert("Fallaste")
      this.aciertos=0
    }
    else if(this.color == 'yellow' && x == 1){
      this.aciertos++
    }
    else if(this.color == 'yellow' && x != 1){
      this.fallos++
      alert("Fallaste")
      this.aciertos=0
    }
    this.cambiarcolor()
  }
}