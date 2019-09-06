import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameComponent } from './username/username.component';
import { UsernameListComponent } from './username-list/username-list.component';
import { UsernameService } from '../shared/username.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
                   UsernameListComponent,
                   UsernameComponent,
          ],
  exports: [
           UsernameListComponent, 
           UsernameComponent
          ],
          providers: [
            UsernameService,
          ]
})
export class UsernamesModule { }
