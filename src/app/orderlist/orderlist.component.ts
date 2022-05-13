import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
orderList:any=[];
orederid="";
order="";
  constructor(private api:CustomerService) { }

  ngOnInit(): void {
    this.api.getorderList().subscribe(data=>{
      if(data.error){
        alert('Something went wrong');
      }
      else{
        // console.log(data);
        this.orderList=data;
      }
    });
  }
  q(data:any){
    this.order=data.query;
    this.orederid=data._id;

  }

}
