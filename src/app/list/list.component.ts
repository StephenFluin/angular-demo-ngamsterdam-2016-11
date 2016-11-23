import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  beers;
  constructor(http: Http) {
    let path = 'https://beerdemo-606d7.firebaseio.com/.json';
    http.get(path).map(res=>res.json().data)
      .subscribe(list => {
        this.beers = list;
      });
    
   }

  ngOnInit() {
  }

}
