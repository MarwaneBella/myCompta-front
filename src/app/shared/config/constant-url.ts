// export const baseUrl = "http://localhost:8082/api";
// export const societeUrl = baseUrl+"/societes";

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ConstantUrl {
    public readonly baseUrl :string = "http://localhost:8082/api";
    public readonly societeUrl :string = this.baseUrl+"/societes";
    public readonly clientUrl :string = this.baseUrl+"/clients";
    public readonly phoneUrl :string = this.baseUrl+"/phones";
    public readonly motCleUrl :string = this.baseUrl+"/mots-cle";
    public readonly addressUrl :string = this.baseUrl+"/addresses";
    public readonly devisUrl :string = this.baseUrl+"/devis";
}