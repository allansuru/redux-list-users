import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();
  @Output() remove = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit() {
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }

  removeUser(user: IUser) {
    this.remove.emit(user);
  }
}
