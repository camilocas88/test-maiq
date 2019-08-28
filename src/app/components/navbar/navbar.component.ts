import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuHidden: boolean = true

  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    this.menuHidden = !this.menuHidden
  }

}
