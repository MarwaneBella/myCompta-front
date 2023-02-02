// export const baseUrl = "http://localhost:8082/api";
// export const societeUrl = baseUrl+"/societes";

import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ConstantUrl {
    public readonly baseUrl :string = "http://localhost:8082/api";
    public readonly societeUrl :string = this.baseUrl+"/societes";
}