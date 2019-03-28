import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from './store/state/app.state';
import { selectConfig } from './store/selectors/config.selector';
import { GetConfig } from './store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';

  constructor(private store: Store<IAppState>) { }

  config$ = this.store.pipe(select(selectConfig));

  ngOnInit() {
    this.store.dispatch(new GetConfig());
  }
}
