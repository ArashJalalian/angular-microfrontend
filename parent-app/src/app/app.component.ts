import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'parent-app';
  config = [{
      path: 'http://localhost:8081/main.js',
      element: 'app-1'
    },
    {
      path: 'http://localhost:8082/main.js',
      element: 'app-2'
    }
  ];

  ngOnInit(): void {
    this.config.forEach(config  => this.load(config));
  }

  load(configItem): void {
    const content = document.getElementById('content');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);

    element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);
  }

  // sends a message to all registered elements.
  // This is useful if we want to send a shared state;
  handleMessage(msg): void {
    console.log('shell received message: ', msg.detail);
    const content: HTMLElement = document.getElementById('content');
    content.childNodes.forEach(childNode => {
      const configElement = this.config.find(config => config.element === childNode.nodeName.toLowerCase())
      if (!!configElement) {
        const element = childNode as HTMLElement;
        element.setAttribute('state', msg.detail);
      }
    });
  }

}
