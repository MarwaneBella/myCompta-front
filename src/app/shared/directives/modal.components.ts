import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from '../services/modal.service';


@Component({
    selector: 'modal',
    template: '<div *ngIf="isOpen"><ng-content ></ng-content></div>'
})

export class ModalComponent implements OnInit, OnDestroy {
    private element: any;


    isOpen  : boolean = false


    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
        console.log(this.element)
    }

    ngOnInit(): void {
        let modal = this;
        // ensure id attribute exists

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);

        // close modal on background click
        // this.element.addEventListener('click', function (e: any) {
        //     if (e.target.className === 'modal') {

        //         modal.close();
        //     }
        // });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        // this.modalService.remove(this.id);

        this.element.remove();
    }

    // open modal
    open(): void {

      this.isOpen = true
        // this.element.style.display = 'block';
        // document.body.classList.add('modal-open');
    }

    // close modal
    close(): void {

      this.isOpen = false
        // this.element.style.display = 'none';
        // document.body.classList.remove('modal-open');
    }
}
