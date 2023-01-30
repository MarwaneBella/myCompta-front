import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { LanguageService } from './shared/services/language.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyCompta-Front';

  listIconsvg :string[]  =  ['dashboard', 'clients', 'societes', 'devis', 'factures', 'search',
  'notification', 'message', 'arrowdown', 'arrowup', 'help', 'logout', 'feedback', 'settings',
  'add', '3dots', 'plus', 'minus', 'export', 'phone', 'email', 'map', 'edit', 'delete'];

  constructor(private svgIconRegistryService : SvgIconRegistryService) {
    
    this.listIconsvg.forEach(name=>{
      this.svgIconRegistryService.loadSvg(`./assets/svg/${name}.svg`,name);
    })

    

    
    
  }


  
  
  
}
