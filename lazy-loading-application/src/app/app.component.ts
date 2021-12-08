import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lazy-loading-application';
  constructor(private router:Router){

  }
  ngOnInit(){
    console.log('yo');
    this.router.navigate(['/dashboard'])

  }
}
