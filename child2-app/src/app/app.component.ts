import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Navigate} from '@ngxs/router-plugin';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {UpdateState} from './app2.state';

@Component({
  // selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Select(state => state.app1State.name) name$: Observable<string>;
  title = 'child2-app';
  private oldPath = document.location.pathname;
  private appRootPath = '/app2';
  @Input('state')
  set state(state: string) {
    console.log('**** input state in app2:', state);
    this.store.dispatch(new UpdateState(state));
  }

  @Output() message = new EventEmitter<any>();

  constructor(private router: Router, private store: Store) {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
  }

  onClick() {
    this.store.dispatch(new Navigate([this.appRootPath]));
    this.message.emit('a message from app2');
    // this.router.navigate(['/app2']);
  }

  ngOnInit(): void {
    this.updateRouterEventsOnUrlChanges();
    this.name$.subscribe(value => console.log('### change detected in app2', value));
  }

  private updateRouterEventsOnUrlChanges() {
    const bodyList = document.querySelector('body');
    const observer = new MutationObserver(mutations => {
      mutations.forEach(() => {
        if (this.oldPath !== document.location.pathname) {
          this.oldPath = document.location.pathname;
          if (this.oldPath !== '/' && !this.oldPath.startsWith(this.appRootPath)) {
            this.router.navigate([this.oldPath]);
          }
        }
      });
    });
    const config = {
      childList: true,
      subtree: true
    };
    observer.observe(bodyList, config);
  }
}
