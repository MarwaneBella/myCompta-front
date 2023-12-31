import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { ClientService } from '../../../http/client.service';
import { Client } from '../../../models/client';


@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss'],
})
export class ShowClientComponent implements OnInit {
  id: number;
  slug: string;
  client: Client = new Client();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    public navigate : NavigateService
  ) {}

  ngOnInit() {
    this.checkRouteAndGetClient();
    if(this.client.societe)
    this.navigate.toShowPath('C',this.client.societe.id,this.client.societe.slug)
  }

  async checkRouteAndGetClient() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split(
      '-'
    );
    this.id = +this.id;
    if (this.id) {
      this.clientService.getClientById(this.id).subscribe({
        next: (data) => (this.client = data),
        error: (e) => console.log(e),
        complete: () => {
          this.checkSlug()
        },
      });
    } else {
      this.router.navigateByUrl(this.navigate.f_clientPath);
    }
  }

  checkSlug() {
    if (this.client.slug != this.slug) {
      this.router.navigateByUrl(this.navigate.toShowPath('C',this.id,this.client.slug));
    }
  }



}
