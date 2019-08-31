import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/services/Work.service';

@Component({
  selector: 'app-Work',
  templateUrl: './Work.component.html',
  styleUrls: ['./Work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private workService:WorkService) { }
  pipeArray:any[]=[];
  ngOnInit() {
    this.pipeArray = this.workService.getAll();
  }

}
