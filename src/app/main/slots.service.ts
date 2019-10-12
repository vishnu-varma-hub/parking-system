import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  constructor() { }
  
  a=0;b=0;c=0;d=0;e=0;
  
  slot1(){
  if(this.a==0){
    document.getElementById("d2").style.backgroundColor="grey";
    document.getElementById("d3").style.backgroundColor="grey";
    document.getElementById("d4").style.backgroundColor="grey";
    document.getElementById("d5").style.backgroundColor="grey";
    document.getElementById("d1").style.backgroundColor="green";
    document.getElementById("bt").style.backgroundColor="#FF365D";
    document.getElementById("bt").removeAttribute("disabled");
    this.a=1;
  }
  else if(this.a==1){
    document.getElementById("d2").style.backgroundColor="white";
    document.getElementById("d3").style.backgroundColor="white";
    document.getElementById("d4").style.backgroundColor="white";
    document.getElementById("d5").style.backgroundColor="white";
    document.getElementById("d1").style.backgroundColor="white";
    document.getElementById("bt").setAttribute("disabled","disabled");
    document.getElementById("bt").style.backgroundColor="grey";
    this.a=0;
  }
}
slot2(){
  if(this.b==0 && document.getElementById("d2").style.backgroundColor=="white"){
    document.getElementById("d1").style.backgroundColor="grey";
    document.getElementById("d3").style.backgroundColor="grey";
    document.getElementById("d4").style.backgroundColor="grey";
    document.getElementById("d5").style.backgroundColor="grey";
    document.getElementById("d2").style.backgroundColor="green";
    document.getElementById("bt").style.backgroundColor="#FF365D";
    document.getElementById("bt").removeAttribute("disabled");
    this.b=1;
  }
  else if(this.b==1){
    document.getElementById("d1").style.backgroundColor="white";
    document.getElementById("d3").style.backgroundColor="white";
    document.getElementById("d4").style.backgroundColor="white";
    document.getElementById("d5").style.backgroundColor="white";
    document.getElementById("d2").style.backgroundColor="white";
    document.getElementById("bt").setAttribute("disabled","disabled");
    document.getElementById("bt").style.backgroundColor="grey";
    this.b=0;
  }
}
slot3(){
  if(this.c==0 && document.getElementById("d3").style.backgroundColor=="white"){
    document.getElementById("d2").style.backgroundColor="grey";
    document.getElementById("d1").style.backgroundColor="grey";
    document.getElementById("d4").style.backgroundColor="grey";
    document.getElementById("d5").style.backgroundColor="grey";
    document.getElementById("d3").style.backgroundColor="green";
    document.getElementById("bt").style.backgroundColor="#FF365D";
    document.getElementById("bt").removeAttribute("disabled");
    this.c=1;
  }
  else if(this.c==1){
    document.getElementById("d2").style.backgroundColor="white";
    document.getElementById("d1").style.backgroundColor="white";
    document.getElementById("d4").style.backgroundColor="white";
    document.getElementById("d5").style.backgroundColor="white";
    document.getElementById("d3").style.backgroundColor="white";
    document.getElementById("bt").setAttribute("disabled","disabled");
    document.getElementById("bt").style.backgroundColor="grey";
    this.c=0;
  }
}
slot4(){
  if(this.d==0 && document.getElementById("d4").style.backgroundColor=="white"){
    document.getElementById("d2").style.backgroundColor="grey";
    document.getElementById("d3").style.backgroundColor="grey";
    document.getElementById("d1").style.backgroundColor="grey";
    document.getElementById("d5").style.backgroundColor="grey";
    document.getElementById("d4").style.backgroundColor="green";
    document.getElementById("bt").style.backgroundColor="#FF365D";
    document.getElementById("bt").removeAttribute("disabled");
    this.d=1;
  }
  else if(this.d==1){
    document.getElementById("d2").style.backgroundColor="white";
    document.getElementById("d3").style.backgroundColor="white";
    document.getElementById("d1").style.backgroundColor="white";
    document.getElementById("d5").style.backgroundColor="white";
    document.getElementById("d4").style.backgroundColor="white";
    document.getElementById("bt").setAttribute("disabled","disabled");
    document.getElementById("bt").style.backgroundColor="grey";
    this.d=0;
  }
}
slot5(){
  if(this.e==0 && document.getElementById("d5").style.backgroundColor=="white"){
    document.getElementById("d2").style.backgroundColor="grey";
    document.getElementById("d3").style.backgroundColor="grey";
    document.getElementById("d4").style.backgroundColor="grey";
    document.getElementById("d1").style.backgroundColor="grey";
    document.getElementById("d5").style.backgroundColor="green";
    document.getElementById("bt").style.backgroundColor="#FF365D";
    document.getElementById("bt").removeAttribute("disabled");
    this.e=1;
  }
  else if(this.e==1){
    document.getElementById("d2").style.backgroundColor="white";
    document.getElementById("d3").style.backgroundColor="white";
    document.getElementById("d4").style.backgroundColor="white";
    document.getElementById("d1").style.backgroundColor="white";
    document.getElementById("d5").style.backgroundColor="white";
    document.getElementById("bt").setAttribute("disabled","disabled");
    document.getElementById("bt").style.backgroundColor="grey";
    this.e=0;
  }
}
}
