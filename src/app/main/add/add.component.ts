import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { SlotsService } from '../slots.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public http:HttpService, public router:Router, public sS:SlotsService) { }


  ngOnInit() {
  }
  add(m,d,n){
    if(this.sS.a==1){
    this.http.add(m,d,n).subscribe();
    alert("vehicle details added successfully");
    this.router.navigate(['\search']);
    
    }
  }
}
