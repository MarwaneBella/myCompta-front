import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  private readonly societePath = '/societes'
  private readonly clientPath = '/clients'
  private readonly devisPath = '/devis'
  private readonly facturePath = '/factures'
  private readonly addPath = '/add'
  private readonly editPath = '/edit/'
  private readonly showPath = '/show/'

  constructor(private router : Router) { }

  toBasePath(from : 'C'|'S'|'D'|'F') : string {

    if(from == 'C') return this.clientPath

    else if(from == 'S') return this.societePath
    
    else if(from == 'D') return this.devisPath

    else if(from == 'F') return this.facturePath

    return ''

  }

  toAddPath(from : 'C'|'S'|'D'|'F') : string {

    if(from == 'C') return this.clientPath+this.addPath

    else if(from == 'S') return this.societePath+this.addPath
    
    else if(from == 'D') return this.devisPath+this.addPath

    else if(from == 'F') return this.facturePath+this.addPath
    
    else return ''
  }

  toEditPath(from : 'C'|'S'|'D'|'F', id : number ,slug : string) : string {

    if(from == 'C') return this.clientPath+this.editPath+id+'-'+slug

    else if(from == 'S') return this.societePath+this.editPath+id+'-'+slug
    
    else if(from == 'D') return this.devisPath+this.editPath+id+'-'+slug

    else if(from == 'F') return this.facturePath+this.editPath+id+'-'+slug
    
    else return ''
  }

   toShowPath(from : 'C'|'S'|'D'|'F', id : number ,slug : string) : string {

    if(from == 'C')  return this.clientPath+this.showPath+id+'-'+slug

    else if(from == 'S') return this.societePath+this.showPath+id+'-'+slug
    
    else if(from == 'D') return this.devisPath+this.showPath+id+'-'+slug

    else if(from == 'F') return this.facturePath+this.showPath+id+'-'+slug

    else return ''
  }


}
