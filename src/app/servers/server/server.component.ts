import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  paramSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.paramSubscription = this.route.params
    //   .subscribe((params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

    ngOnDestroy() {
      this.paramSubscription.unsubscribe();
    }
}
