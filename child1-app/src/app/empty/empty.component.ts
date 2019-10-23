import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  template: ''
})
export class EmptyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('*** app1 init empty component');
  }

  ngOnInit(): void {
    // this.router.events.subscribe(value => console.log('**** app1 router event', value));
  }
}
