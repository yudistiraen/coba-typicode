import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = '';
  constructor() { }

  ngOnInit(): void {
    console.log('header')
    this.userName = localStorage.getItem('email')?.toString() || '';
  }

}
