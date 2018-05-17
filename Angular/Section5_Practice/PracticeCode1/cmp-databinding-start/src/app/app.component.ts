import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'it is a test'}];
  newServerName = '';
  newServerContent = '';
  test = 'aaaaaaaaaa55555555555555555555555555555aaaaaaaaaaaaaa';
  onServerCreated(server: {content: string, name: string}) {
      this.serverElements.push( {type: 'server', name: server.name, content: server.content});
  }

  onBlueServerCreated(server: {content: string, name: string}) {
    this.serverElements.push( {type: 'blueServer', name: server.name, content: server.content});
}
}
