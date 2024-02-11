import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chit',
  templateUrl: './chit.component.html',
  styleUrls: ['./chit.component.css']
})
export class ChitComponent implements OnInit {

  constructor() {
    console.log('chit-module-loaded')
   }

  ngOnInit(): void {
  }

}
