import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Les etapes de Input : 
// 1 : creer une variable dans le parent
// 2 : passer cette variable a l'enfant via le template
// <app-child [greeting]="parentGreeting"></app-child>
// 3 : Declarer dans le component enfant un input pour recuperer cett variable
// 4 : Ne pas oublier de import { Input } from '@angular/core'


// Les etapes de Output :
// 1 : creer un event emitter chez l'enfant.
// 2 : appeler sa methode emit suite a une action (click, etc...).
// 3 : definir l'event dans le template parent
// <app-child (signalParent)="receiveSignal($event)">
// 4 : creer la methode receiveSignal chez le parent.

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input() childGreeting: string;
  @Output() signalParent = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  imBeyonce () {
    this.signalParent.emit('Queen Beeeee');
  }

}
