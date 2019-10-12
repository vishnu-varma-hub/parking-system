import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }
  url="https://api.mlab.com/api/1/databases/manumits/collections/vehicle?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  add(m,d,n){
    return this.http.post(this.url,{model:m,date:d,number:n});
  }
  display(){
    return this.http.get(this.url);
  }
}
