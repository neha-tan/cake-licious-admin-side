import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent implements OnInit {
orderList:any;
  constructor(private api:CustomerService,private router:ActivatedRoute) { }
id:any;
  ngOnInit(): void {

    this.router.params.subscribe(params=>{

        this.id = params['id'];
      console.log(this.id);
      this.api.getSingleOrder(this.id)
      .subscribe(data=>{
        console.log(data);
        this.orderList = data;
      },err=>{
console.log(err);
          alert('Something went wrong');

      });

    })


  }



  name = 'Status';


  public counts = ["Procesing","OutFoodDelivery","Placed",
  "Delivered"];
  public orderStatus:any;

  getVal(v:any){
           console.log(v.target.value);
           this.orderStatus = v.target.value;
           console.log(this.orderStatus)
  }


}



