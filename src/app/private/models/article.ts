import { TypeArticle } from "./type-article"

export class Article {
    
    id: number
    quantity : number
    prixHT: number
    reduction :number
    redIsPercentage : boolean
    tva: number
    description: string
    typeArticle : TypeArticle
}