import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class ModalService {
  private modal: any

  add(modal: any) {
      // add modal to array of active modals
      this.modal = modal;
  }

  open() {
      // open modal specified by id

      this.modal.open();
  }

  close() {
      // close modal specified by id

      this.modal.close();
  }
}
