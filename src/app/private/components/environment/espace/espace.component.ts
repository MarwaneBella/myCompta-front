import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvironmentService } from 'src/app/private/http/environment.service';
import { Environment } from 'src/app/private/models/environment';
import { Card } from 'src/app/shared/models/card';
import { NavigateService } from 'src/app/shared/services/navigate.service';


@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.scss']

})
export class EspaceComponent implements OnInit{

  cards:  Card[] = []
  enviroment : Environment
  id: number
  slug : string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private environmentService : EnvironmentService,
    public navigate : NavigateService
  ) {}

  ngOnInit() {
    this.checkRouteAndGetClient();
  }

  async checkRouteAndGetClient() {
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split(
      '-'
    );
    console.log(this.id,this.slug)
    this.id = +this.id;
    if (this.id) {
      this.environmentService.getEnvironmentById(this.id).subscribe({
        next: (data) => (this.enviroment = data),
        error: (e) => console.log(e),
        complete: () => {
          this.checkSlug()
          this.setCards()
        },
      });
    } else {
      this.router.navigateByUrl(this.navigate.environmentListPath);
    }
  }

  checkSlug() {
    if (this.enviroment.slug != this.slug) {
      // this.router.navigateByUrl(`${this.navigate.environmentPath}/${this.id}-${this.slug}/`);
    }
  }




  setEspaces() {
    this.environmentService.getEnvironmentById(1).subscribe({
      next : res => this.enviroment = res,
      error : e => console.log(e),
      complete: () => this.setCards()

    })

  }
  setCards(): void {
    console.log(this.enviroment)
    if(this.enviroment.personnel){
        var card : Card  = {} as Card
        card.id = this.enviroment.id+'-'+this.enviroment.slug
        card.mainIcon= 'par'
        card.primaryTitle1 = "Gestion du personnel"
        this.cards.push(card)
        console.log(card)
    }


    }
  }





