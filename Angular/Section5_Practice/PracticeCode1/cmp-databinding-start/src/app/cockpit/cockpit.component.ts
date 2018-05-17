import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent   {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() serverBlueCreated = new EventEmitter<{name: string, content: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContent') serverContent: ElementRef;
  onAddServer(serverName) {
    console.log(serverName);
    this.serverCreated.emit({name: serverName, content: this.newServerContent});
  }

  onAddBlueprint() {
    console.log(this.serverContent);
    this.serverBlueCreated.emit({name: this.newServerName, content: this.serverContent.nativeElement.value});
  }
}
