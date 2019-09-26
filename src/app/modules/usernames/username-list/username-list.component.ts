import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../shared/username.service';
import { Username } from 'src/app/model/username.model';

@Component({
  selector: 'app-username-list',
  templateUrl: './username-list.component.html',
  styleUrls: ['./username-list.component.css']
})
export class UsernameListComponent implements OnInit {
  count: any;
  name: any = [];

   constructor(
    private usernameService: UsernameService
  ) { }
 

   ngOnInit() {
    this.getAllUsername();
    this.GetUsername();
  }

   getAllUsername() {
    this.usernameService.getAllUsername();
  }

   deleteUsername(id: number) {
    this.usernameService.deleteUsername(id).subscribe(
      (data) => {
        this.getAllUsername();

      });
    }     
   GetUsername() {
        this.usernameService.getUsername().subscribe(
          (data: Username[]) => {
            this.name = data,
          this.count=this.name.length,
            console.log(this.count)}
          );          
  }
  setName(name: any)
  {
    this.usernameService.setName(name);
   // console.log(name);
  }
}
/*************************/



