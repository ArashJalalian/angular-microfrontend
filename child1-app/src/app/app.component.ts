import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Navigate} from '@ngxs/router-plugin';
import {UpdateState} from './app1.state';


@Component({
  // selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private oldPath = document.location.pathname;
  private appRootPath = '/app1';
  @Input('state')
  set state(state: string) {
    console.log('**** input state in app1:', state);
    this.store.dispatch(new UpdateState(state));
  }
  title = 'child1-app';
  constructor(private router: Router, private store: Store) {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
  }

  onClick() {
    this.store.dispatch(new Navigate([this.appRootPath]));
    // this.router.navigate(['/app1']);
  }



  ngOnInit(): void {
    this.updateRouterEventsOnUrlChanges();
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
