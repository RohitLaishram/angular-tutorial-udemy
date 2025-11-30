import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

const randomIndex=Math.floor(Math.random() * 6)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    selectedUser= DUMMY_USERS[randomIndex]
}
