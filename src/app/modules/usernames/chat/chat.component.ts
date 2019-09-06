import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../shared/username.service';
import { Username } from 'src/app/model/username.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  allUser : Username [];
  name1 ; 
  name2=[];
  msg="";

  constructor(private user : UsernameService) { }

  ngOnInit() 
  {  
    
  }

  getName(a)
  {
    let name1 = this.user.getName();
    this.name2.push(name1+" -: "+a);
    console.log(this.name2);
  }
}
