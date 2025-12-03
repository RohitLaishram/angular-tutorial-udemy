import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { User } from '../dummy_users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) user!: User;

  avatar = input.required<string>();
  selected = input.required<boolean>();
  user = input.required<User>();

  // @Output() select = new EventEmitter<string>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());
  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  selectUser() {
    this.select.emit(this.user().id);
  }
}
