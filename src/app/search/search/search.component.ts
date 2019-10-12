import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public http:HttpService) { }
  vehicles:any;
  ngOnInit() {
  }
  display(){
    this.http.display().subscribe(res=>{
      this.vehicles=res;
    });
  }
}
