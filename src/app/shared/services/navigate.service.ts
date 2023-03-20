import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'platform'
})
export class NavigateService {

  public readonly addPath = '/add'
  public readonly editPath = '/edit/'
  public readonly showPath = '/show/'

  public readonly environmentPath = '/environment'
  public readonly facturationPath = this.environmentPath+'/facturation'

  // Start of routes of Espace Facturation
  public readonly f_societePath = this.facturationPath+'/societes'
  public readonly f_clientPath = this.facturationPath+'/clients'
  public readonly f_devisPath = this.facturationPath+'/devis'
  public readonly f_facturePath = this.facturationPath+'/factures'

  public readonly f_settingsPath = this.facturationPath+'/settings'
  public readonly f_s_itemTypesPath = this.f_settingsPath+'/item-types'
  public readonly f_s_preferencesPath = this.f_settingsPath+'/preferences'
  public readonly f_s_generalPath = this.f_s_preferencesPath+'/general'
  public readonly f_s_uidsPath = this.f_s_preferencesPath+'/uids'
  // End of routes of Espace Facturation


  constructor(){ }

  // toBasePath(from : 'C'|'S'|'D'|'F'|'ESP_F') : string {

  //   if(from == 'ESP_F') return this.facturationPath

  //   else if(from == 'C') return this.f_clientPath

  //   else if(from == 'S') return this.f_societePath

  //   else if(from == 'D') return this.f_devisPath

  //   else if(from == 'F') return this.f_facturePath

  //   return ''

  // }

  toAddPath(from : 'C'|'S'|'D'|'F') : string {

    if(from == 'C') return this.f_clientPath+this.addPath

    else if(from == 'S') return this.f_societePath+this.addPath

    else if(from == 'D') return this.f_devisPath+this.addPath

    else if(from == 'F') return this.f_facturePath+this.addPath

    else return ''
  }

  toEditPath(from : 'C'|'S'|'D'|'F', id : number ,slug : string) : string {

    if(from == 'C') return this.f_clientPath+this.editPath+id+'-'+slug

    else if(from == 'S') return this.f_societePath+this.editPath+id+'-'+slug

    else if(from == 'D') return this.f_devisPath+this.editPath+id+'-'+slug

    else if(from == 'F') return this.f_facturePath+this.editPath+id+'-'+slug

    else return ''
  }

   toShowPath(from : 'C'|'S'|'D'|'F', id : number ,slug : string) : string {

    if(from == 'C')  return this.f_clientPath+this.showPath+id+'-'+slug

    else if(from == 'S') return this.f_societePath+this.showPath+id+'-'+slug

    else if(from == 'D') return this.f_devisPath+this.showPath+id+'-'+slug

    else if(from == 'F') return this.f_facturePath+this.showPath+id+'-'+slug

    else return ''
  }


}
