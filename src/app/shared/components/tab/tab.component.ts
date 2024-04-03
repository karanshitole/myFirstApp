import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
     selectedFramwork: string='angular'
  constructor() { }

  ngOnInit(): void {
  }
  onTabClick(eve:Event){
    //let val = (eve.target as HTMLAnchorElement).getAttribute('data-framework') as string
    // let val = (eve.target as HTMLAnchorElement).dataset['data-framework'] as string
    // console.log(val);
    // this.selectedFramwork =val
    this.selectedFramwork = (eve.target as HTMLAnchorElement).dataset['data-framework'] as string
  }
  
}
