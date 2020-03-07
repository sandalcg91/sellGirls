import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  welcomeMsg : string;

  constructor(private wel : WelcomeDataService) { }

  ngOnInit() {
  }

  getMessage(){
    this.wel.getWelcomeMessage().subscribe(
      response => this.handleResponse(response)
    )
  }

  handleResponse(response){
    // console.log(response);
    this.welcomeMsg = response.message;
    // console.log(this.welcomeMsg)
  }
}
