import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, interval, lastValueFrom } from 'rxjs';
import { SocieteService } from 'src/app/private/http/societe.service';
import { Activity } from 'src/app/private/models/activity';
import { Societe } from 'src/app/private/models/societe';

@Component({
  selector: 'app-show-societe',
  templateUrl: './show-societe.component.html',
  styleUrls: ['./show-societe.component.scss']
})
export class ShowSocieteComponent implements OnInit {
  
  motCle : string[] = ['dev','marketing','ecommerce','dev','marketing','ecommerce','dev','marketing','ecommerce']
  id : number; 
  slug : string
  societe : Societe

  constructor(private route: ActivatedRoute, private router : Router, private societeService : SocieteService) {
  }

  ngOnInit(){
    this.checkRouteAndGetSociete();
  }

  async checkRouteAndGetSociete(){
    [this.id, this.slug] = await this.route.snapshot.params['id-slug'].split('-');
    this.id = +this.id
    if(this.id){
      this.societeService.getSocieteById(this.id).subscribe({  
        next: data => this.societe = data,
        error: err => console.log(err),  
        complete: () => this.checkSlug(),
      })
    }
    else{
      this.router.navigateByUrl('societes');
    }
  
  }

  checkSlug(){
    if(this.societe.slug === this.slug){
      console.log(this.societe)
    }
    else{
      this.router.navigateByUrl(`societes/show/${this.id}-${this.societe.slug}`);
    }
  }


}


