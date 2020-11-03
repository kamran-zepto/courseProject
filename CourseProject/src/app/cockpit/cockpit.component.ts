import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @ViewChild('servername') serverName: ElementRef;
  newServerName = '';
  newServerContent = '';
  constructor() {}
  onAddServer(serverContent: HTMLInputElement) {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  ngOnInit(): void {}
}
