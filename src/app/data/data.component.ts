import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()

   }

   fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.usdata=data
      }
    )
   }

  usdata:any={}

  ngOnInit(): void {
  }

}
