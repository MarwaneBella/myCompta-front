import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { TypeArticleService } from '../../../private/http/type-article.service';
import { TypeArticle } from '../../../private/models/type-article';

class Totals{
  totalHT :number = 0
  remise :number = 0
  totalHTF :number = 0
  tva :number = 0
  total :number = 0
}

@Component({
  selector: 'app-article-panel',
  templateUrl: './article-panel.component.html',
  styleUrls: ['./article-panel.component.scss']
})
export class ArticlePanelComponent implements OnInit {

  typesArticle : TypeArticle[]
  
  articleForms : Array<FormGroup> = new Array<FormGroup>();
  remiseForm : FormGroup
  reductionType =['%','£']
  totals : Totals = new Totals()
  min: number = 1
  bgPanel = { id : 0, colored: false }

  constructor(
    private typeArticleService: TypeArticleService,
    private formBuilder : FormBuilder,
    private decimalPipe: DecimalPipe
  ) { }

  async ngOnInit() {
    this.initRemiseForm()
    await this.setTypesArticle()
    this.addArticleForm(-1)

  }

  initRemiseForm(){
    this.remiseForm = this.formBuilder.group({
      remise: null,
      remiseType : this.reductionType[0]
    })
  }

  async setTypesArticle(){
    this.typesArticle  = await firstValueFrom(this.typeArticleService.getTypeArticleList())
  }

  addArticleForm(i:number){
    var articleForm : FormGroup
    articleForm = this.formBuilder.group({
      typeArticle: 'Service',
      quantity: [null, Validators.required],
      prixHT: [null, Validators.required],
      tva: 20,
      reduction: null ,
      reductionType: this.reductionType[0],
      totalHT : {value : null , disabled: true},
      totalTTC :{value : null , disabled: true},
      description: null,
    });
    i++
    this.articleForms.splice(i, 0, articleForm);
    if(i!=0) this.setBgPanel(i)

  }

  duplicateArticleForm(i:number){
    this.articleForms.splice(i, 0, this.articleForms[i]);
    i++
    this.setBgPanel(i)
    
  }

  removeArticleForm(i : number ){
    if (this.articleForms.length > this.min) {
      this.articleForms.splice(i, 1);
      this.calculate()
    }
  }

  movePanelToAbove(i:number){
    if(i > 0){
      var articleForm :FormGroup = this.articleForms[i]
      this.articleForms.splice(i, 1);
      this.articleForms.splice(i-1, 0, articleForm);
    }
  }

  movePanelToBottom(i:number){
    if(i < this.articleForms.length-1){
      var articleForm :FormGroup = this.articleForms[i]
      this.articleForms.splice(i, 1);
      this.articleForms.splice(i+1, 0, articleForm);
    }
  }

  setBgPanel(i:number){
    this.bgPanel.id = i
    this.bgPanel.colored = true
    setTimeout(() => {
      this.bgPanel.colored = false
    }, 500);
  }

  calculate(){

    this.totals = new Totals()
    this.articleForms.forEach( articleForm =>{
      if(articleForm.controls['quantity'].value && articleForm.controls['prixHT'].value){
        this.calculateOneArticle(articleForm)
      }
    })

    if(!this.remiseForm.controls['remise'].value){
      this.totals.remise = 0
    }
    else{
      if(this.remiseForm.controls['remiseType'].value == '%'){
        if(this.remiseForm.controls['remise'].value > 50){
          this.remiseForm.controls['remise'].setValue(50)
        }
        this.totals.remise = this.totals.totalHT/100*this.remiseForm.controls['remise'].value
      }
      else{
        if(this.remiseForm.controls['remise'].value > this.totals.totalHT/2){
          this.remiseForm.controls['remise'].setValue(this.totals.totalHT/2)
        }
        this.totals.remise = this.remiseForm.controls['remise'].value
      }
    } 
    
    this.totals.totalHTF = this.totals.totalHT - this.totals.remise
    this.totals.total = this.totals.totalHTF + this.totals.tva
    
  }


  calculateOneArticle(articleForm : FormGroup){
    var quantity, prixHT, tva, reduction :number;
    var totalHT, totalTTC : number
    
    if(!articleForm.controls['quantity'].value) quantity = 0
    else quantity = articleForm.controls['quantity'].value
    if(!articleForm.controls['prixHT'].value) prixHT = 0
    else prixHT = articleForm.controls['prixHT'].value
    if(!articleForm.controls['tva'].value) tva = 0
    else tva = articleForm.controls['tva'].value
    if(!articleForm.controls['reduction'].value) reduction = 0
    else reduction = articleForm.controls['reduction'].value
  
    if(articleForm.controls['reductionType'].value == '%' ){
      if(reduction > 50){
        articleForm.controls['reduction'].setValue(50)
        reduction = 50
      }
      totalHT =  (quantity*prixHT) * (1-reduction/100);
    }
    else{
      if(reduction > ((quantity*prixHT)/2)){
        articleForm.controls['reduction'].setValue(((quantity*prixHT)/2))
        reduction = ((quantity*prixHT)/2)
      }
      totalHT =  (quantity*prixHT) - reduction ;
    }

    totalTTC = totalHT*(1 + tva/100)

    articleForm.controls['totalHT'].setValue( this.decimalPipe.transform(totalHT,'1.0-2' ))
    articleForm.controls['totalTTC'].setValue( this.decimalPipe.transform(totalTTC,'1.0-2' ))

    this.totals.totalHT +=  totalHT
    this.totals.tva += totalHT/100*tva;
    
  }

}
