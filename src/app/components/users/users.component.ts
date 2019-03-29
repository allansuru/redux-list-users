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

  constructor() {}

  ngOnInit() {
    console.log(this.users);
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }
}
