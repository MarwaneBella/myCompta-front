export class Activity{
    target : string
    code: string
    action : 'C'|'S'|'D'
    price : number
    date : Date 
  
    constructor(target : string , code: string ,action : 'C'|'S'|'D', price : number ){
      this.target = target
      this.code = code
      this.action = action
      this.price = price
      this.date = new Date();
    }
  }