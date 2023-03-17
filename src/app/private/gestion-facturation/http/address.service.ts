import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantUrl } from 'src/app/shared/config/constant-url';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient, private constant : ConstantUrl) { }

  getAddressById(id :number):Observable<Address>{
    return this.http.get<Address>(`${this.constant.addressUrl}/${id}`);
  }

  getAddressList(): Observable<Address[]>{
    return this.http.get<Address[]>(`${this.constant.addressUrl}`);
  }

  addAddress(address: Address): Observable<any> {
    return this.http.post(`${this.constant.addressUrl}`, address);
  }
  
  updateAddressById( id :number, address: Address) :Observable<Address>{
    return this.http.put<Address>(`${this.constant.addressUrl}/${id}`,address);
  }

  deleteAddressById(id :number):Observable<string>{
   return this.http.delete(`${this.constant.addressUrl}/${id}`,{ responseType: 'text'});
  }
}
