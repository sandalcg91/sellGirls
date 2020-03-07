import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect-me',
  templateUrl: './redirect-me.component.html',
  styleUrls: ['./redirect-me.component.css']
})
export class RedirectMeComponent implements OnInit {

  name = '';
  constructor(private par : ActivatedRoute) { }

  ngOnInit() {
    this.name = this.par.snapshot.params['name'];
  }

}
