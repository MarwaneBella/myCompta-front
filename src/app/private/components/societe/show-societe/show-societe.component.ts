import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/private/models/activity';

@Component({
  selector: 'app-show-societe',
  templateUrl: './show-societe.component.html',
  styleUrls: ['./show-societe.component.scss']
})
export class ShowSocieteComponent implements OnInit {
  
  motCle : string[] = ['dev','marketing','ecommerce','dev','marketing','ecommerce','dev','marketing','ecommerce']
  constructor() { }
  
  ngOnInit(){
  
  }


//   images = [
//     {path: '/assets/img/photo-1548625149-9129dad5eef7.jpg'},
//     {path: '/assets/img/photo-1548625149-d37da68f9a7f.jpg'},
//     {path: '/assets/img/photo-1489365091240-6a18fc761ec2.jpg'},
//     {path: '/assets/img/photo-1547691889-841a6f1c5ca6.jpg'},
//     {path: '/assets/img/photo-1595433562696-a8b1cb8bdad1.jpg'},
//     {path: '/assets/img/photo-1495563381401-ecfbcaaa60f2.jpg'},
//     {path: '/assets/img/photo-1534801022022-6e319a11f249.jpg'},
//     {path: '/assets/img/photo-1524324463413-57e3d8392df1.jpg'},
//     {path: '/assets/img/photo-1506086679524-493c64fdfaa6.jpg'},
//     {path: '/assets/img/photo-1569749450723-1836b067fb64.jpg'}
// ];   

// imagesForSlider = [
//     {path: '/assets/img/photo-1444065707204-12decac917e8.jfif'},
//     {path: '/assets/img/photo-1445452916036-9022dfd33aa8.jfif'},
//     {path: '/assets/img/photo-1443996104801-80c82e789b18.jfif'},
//     {path: '/assets/img/photo-1505839673365-e3971f8d9184.jfif'},
//     {path: '/assets/img/photo-1545420333-23a22b18b8fa.jfif'}
// ];



// handleCarouselEvents(event:any) {
// console.log(event);
// }

}
