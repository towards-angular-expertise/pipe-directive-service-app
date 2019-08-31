import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService  {

 


  pipeArray: any[];

  constructor() { }

  getAll() :any[]{
   this.fillArray();

   return this.pipeArray;
  }

  fillArray(){
    this.pipeArray = [
      {"name":"Pipe Ozellikleri","code":100},
      {"name":"Pipe Ozellikleri-->2" ,"code":101},
      {"name":"Pipe Ozellikleri-->3","code":102},
      {"name":"Pipe Ozellikleri-->4","code":103},
      {"name":"Pipe Ozellikleri-->5","code":104}];
    
  }

}
