import { Component, OnInit } from '@angular/core';
import { imovies } from '../../models/movies';

@Component({
  selector: 'app-tab-switch',
  templateUrl: './tab-switch.component.html',
  styleUrls: ['./tab-switch.component.css']
})
export class TabSwitchComponent implements OnInit {
 
  SelectedFramework:string='angular'
  constructor() { }

  ngOnInit(): void {
  }

}
