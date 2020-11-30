import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // let id = +this.route.snapshot.params['id'];
    // if (id) {
    //   this.server = this.serversService.getServer(id);
    // }
    this.route.params.subscribe((param: Params) => {
      this.server = this.serversService.getServer(+param['id']);
    });
  }
}
