import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {Navigate} from '@ngxs/router-plugin';
import {Observable} from 'rxjs';
import {UpdateState} from '../app1.state';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {
  @Select(state => state.app1State.name) name$: Observable<string>;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.name$.subscribe(value => console.log('*** app1 state changed', value) );
  }

  onClick() {
    this.store.dispatch(new Navigate(['app1/child1']));
    this.store.dispatch(new UpdateState(Date.now().toLocaleString()));
  }
}
