import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, User } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  // selectedUser = signal<User>(null!);
  selectedUserId = signal<string>('');

  selectedUser: User = null!;

  onUserSelect(userId: string) {
    this.selectedUser = DUMMY_USERS.find((user) => user.id === userId)!;
    this.selectedUserId.set(userId);
  }
}
