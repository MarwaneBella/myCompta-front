import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DevisStatus } from 'src/app/private/gestion-facturation/enums/devis-status';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private callMethodSearchSource = new Subject<any>();
  private callMethodFilterStatusSource = new Subject<any>();
  // Observable string streams
  methodSearchCalled$ = this.callMethodSearchSource.asObservable();
  methodFilterStatusCalled$ = this.callMethodFilterStatusSource.asObservable();

  // Service message commands
  callMethodSearch(data : string) {
    this.callMethodSearchSource.next(data);
  }

  callMethodFilterStatus(filterStatus : DevisStatus | null){
    this.callMethodFilterStatusSource.next(filterStatus);
  }
}
