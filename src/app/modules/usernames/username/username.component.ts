import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../shared/username.service';
import { Username } from 'src/app/model/username.model';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})

export class UsernameComponent implements OnInit {

   constructor(
    private usernameService: UsernameService
  ) { }

   ngOnInit() {
  }

   createUsername(currentUsername: Username) {
    if (currentUsername.id === null) {
      console.log('Create');
      this.usernameService.createUsername(currentUsername).subscribe(
        (data) => {
          this.usernameService.getAllUsername();
        });
    } else {
      console.log('Update');
      this.usernameService.updateUsername(currentUsername).subscribe(
        (data) => {
          this.usernameService.getAllUsername();
        });
    }
  }  
}