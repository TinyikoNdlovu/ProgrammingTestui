import { Injectable } from '@angular/core';
//import HttPClient and Observable Modules
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:50603";

  constructor(private http:HttpClient) { }

  getPerLIST():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/person');
  }

  addPerson(val:any){
    return this.http.post(this.APIUrl+'/Person',val);
  }
}
