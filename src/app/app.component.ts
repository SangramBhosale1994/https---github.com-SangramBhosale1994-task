import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  users:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get().subscribe((result:any)=>{
      this.users = result;
    });
  }
}
