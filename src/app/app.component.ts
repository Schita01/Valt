import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart,NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
}) 
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

}
