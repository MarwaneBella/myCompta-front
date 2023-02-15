import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/private/http/client.service';
import { Client } from 'src/app/private/models/client';
import { NavigateService } from 'src/app/private/services/navigate.service';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss'],
})
export class ShowClientComponent implements OnInit {
  id: number;
  slug: string;
  client: Client = new Client();
  topBarData : [string,string?] = ['','']

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
          this.getTopBarData();
        },
      });
    } else {
      this.router.navigateByUrl('clients');
    }
  }

  checkSlug() {
    if (this.client.slug != this.slug) {
      this.router.navigateByUrl(`clients/show/${this.id}-${this.client.slug}`);
    }
  }

  getTopBarData(){
    this.topBarData[0] = this.client.firstName+' '+this.client.lastName
    if(this.client.societe) this.topBarData[1] = "Professionel"
    else this.topBarData[1] = "Particulier"
  }

}
