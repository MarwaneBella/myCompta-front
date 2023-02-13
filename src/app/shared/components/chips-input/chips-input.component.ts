import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.scss']
})
export class ChipsInputComponent implements OnInit {

  motsCle : Array<String>= []
  mots = [
    {id: 1, name: 'City1'},
    {id: 2, name: 'City2'},
    {id: 3, name: 'City3'},
    {id: 4, name: 'City4'},
    {id: 5, name: 'City5'},
    {id: 2, name: 'City2'},
    
];
form :FormGroup;
addTag: any;

  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      mot :null
    })

  }

  

  submit(){
    this.form.reset()
  }

  

  


  createNew(event : any){
    return {id: null, name: event}
  }
  
  
  test(event: any){
    console.log(event)

  }
}
