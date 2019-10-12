import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  floor1(){
    this.router.navigate(['/floor1']);
  }
  floor2(){
    this.router.navigate(['/floor2']);
  }
  floor3(){
    this.router.navigate(['/floor3']);
  }
}
