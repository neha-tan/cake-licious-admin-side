import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
orderList:any;
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


  name = 'Status';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Procesing","OutFoodDelivery","Placed",
  "Delivered"];
  public orderStatus = "OutFoodDelivery"
}



