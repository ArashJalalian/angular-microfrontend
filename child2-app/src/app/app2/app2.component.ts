import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Navigate} from '@ngxs/router-plugin';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
  }

  onClicked() {
    this.store.dispatch(new Navigate(['app2/child1']));
    // this.router.navigate(['app2/child1']);
  }
}
