import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }
  getCustomerList():Observable<any>{
    var api = "http://localhost:3000/customerList/viewCustomer";
    return this._http.get(api);
  }
  getorderList():Observable<any>{
    var api = "http://localhost:3000/order-admin/viewOrder";
    return this._http.get(api);
  }
  getQueryList():Observable<any>{
    var api = "http://localhost:3000/support-admin/viewQuery";
    return this._http.get(api);
  }
  getFeedbackList():Observable<any>{
    var api = "http://localhost:3000/feedback/viewFeedback";
    return this._http.get(api);
  }
}
