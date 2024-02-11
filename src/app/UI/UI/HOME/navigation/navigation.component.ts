import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { 
    this.router.navigate(['navigation/Dashboard']);
  }

  ngOnInit(): void {
  }
  closeNav(){
    debugger
    document.getElementById("mySidenav").style.width = "0px";
  }
  openNav() {
    debugger
    document.getElementById("mySidenav").style.width = "250px";
  }
}
