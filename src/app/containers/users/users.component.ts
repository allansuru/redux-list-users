import { GetUsers, CreateUser, RemoveUser } from './../../store/actions/user.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectUserList } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    debugger
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
  addUser() {
    // jogar pro component, emitindo para ca, q nem o remove!
    this.store.dispatch(new CreateUser({
      id: Math.floor(Math.random() * 100),
      name: 'Allan',
      cardNumber: 'xxxx123',
      cardType: 'mastercard'
    }));
  }

  removeUser(event) {
    this.store.dispatch(new RemoveUser(event));
  }
}
