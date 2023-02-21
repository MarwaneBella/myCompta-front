import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FilterService } from 'src/app/shared/services/filter.service';
import { DevisService } from '../../http/devis.service';
import { Devis } from '../../models/devis';
import { DevisStatus } from '../../models/enums/devis-status';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {

  devis :Devis[] = [];
  isEmpty : boolean = false;

  currentDevis: Devis = new Devis();
  currentIndex = -1;
  data :string = '';
  page :number = 1;
  filterStatus :DevisStatus ; 
  count :number = 0;
  pageSize :number = 8;
  
  constructor(private devisService : DevisService, private filterService : FilterService) {
    this.filterService.methodSearchCalled$.subscribe(
      (res) => {
        this.data = res
        this.searchData()
      }
    );
    
    this.filterService.methodFilterStatusCalled$.subscribe(
      (res) => {
        console.log(res)
        this.filterStatus = res
        this.searchData()
      }
    );
    
  }
  
  async ngOnInit(): Promise<void> {
    await this.setAllDeviss();
    if(this.devis.length == 0) this.isEmpty = true
  }


  async setAllDeviss(){
    const params = this.getRequestParams(this.filterStatus,this.data, this.page, this.pageSize);
    await firstValueFrom(this.devisService.getDevisList(params))
    .then(res => {
      const { devis, totalItems } = res;
      this.devis = devis;
      this.count = totalItems;
    }
    )
    .catch(console.log)

  }


  getRequestParams(filterStatus : DevisStatus,searchData: string, page: number, pageSize: number): any {
    let params: any = {};

    if(filterStatus){
      params[`status`] = filterStatus;
      console.log(filterStatus)
    }

    if (searchData) {
      params[`data`] = searchData;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

 

  pageChange(page: number): void {
    this.page = page;
    this.setAllDeviss();
  }

  pageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.page = 1;
    this.setAllDeviss();
  }

  searchData(): void {
    this.page = 1;
    this.setAllDeviss();
  }

}
