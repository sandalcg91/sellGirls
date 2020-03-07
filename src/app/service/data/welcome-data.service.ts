import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message : string){
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  

  constructor(private service : HttpClient){ }

  getWelcomeMessage(){
    // console.log('HEYY');
    // console.log(this.service.get('http://localhost:8080/helloJSON').subscribe());
    return this.service.get<HelloWorldBean>('http://localhost:8080/helloJSON');
  }
}
