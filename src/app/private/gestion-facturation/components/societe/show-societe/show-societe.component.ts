import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { SocieteService } from '../../../http/societe.service';
import { Societe } from '../../../models/societe';

@Component({
  selector: 'app-show-societe',
  templateUrl: './show-societe.component.html',
  styleUrls: ['./show-societe.component.scss'],
})
export class ShowSocieteComponent implements OnInit {
  id: number;
  slug: string;
  societe: Societe = new Societe();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private societeService: SocieteService,
    protected navigate : NavigateService
  ) {}

  ngOnInit() {
    this.checkRouteAndGetSociete();
  }

  async checkRouteAndGetSociete() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split(
      '-'
    );
    this.id = +this.id;
    if (this.id) {
      this.societeService.getSocieteById(this.id).subscribe({
        next: (data) => (this.societe = data),
        error: (err) => console.log(err),
        complete: () => {
          this.checkSlug();
        },
      });
    } else {
      this.router.navigateByUrl(this.navigate.f_societePath);
    }
  }

  checkSlug() {
    if (this.societe.slug != this.slug) {
      this.router.navigateByUrl(
        this.navigate.toShowPath('S',this.id,this.societe.slug)
      );
    }
  }
}
