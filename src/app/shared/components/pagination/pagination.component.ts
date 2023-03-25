import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  pageSizes: number[] = [2,4, 8, 10, 50, 100];
  maxSize : number  = 3;
  constructor() { }

  ngOnInit(): void {
  }

  handlePageChange(event : number){
    this.pageChange.emit(event)
  }

  handlePageSizeChange(event : any){
    this.pageSizeChange.emit(event.target.value)
  }

}
