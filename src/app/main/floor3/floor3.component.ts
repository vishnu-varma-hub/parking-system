import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotsService } from '../slots.service';
@Component({
  selector: 'app-floor3',
  templateUrl: './floor3.component.html',
  styleUrls: ['./floor3.component.css']
})
export class Floor3Component implements OnInit {

  constructor(public router:Router, public sS:SlotsService) { }

  ngOnInit() {
  }
  slot1(){
    this.sS.slot1();
  }
  slot2(){
    this.sS.slot2();
  }
  slot3(){
    this.sS.slot3();
  }
  slot4(){
    this.sS.slot4();
  }
  slot5(){
    this.sS.slot5();
  }
select(){
  this.router.navigate(['\add']);
}

}
