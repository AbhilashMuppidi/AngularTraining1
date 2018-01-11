import { Category } from "../models/category.model";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { ReturnStatement } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class CategoryService {
    private categoriesData: Category[] = [];
    restUrl = "http://localhost:3000/wscategories"
    constructor(private http: HttpClient) {

        // this.categoriesData=[
        //     new Category(1,"Mobiles"),
        //     new Category(2,"Electronics")
        // ]
    }
    getCategories() {
        return this.http.get<Category[]>(this.restUrl)        
        //return this.categoriesData;
    }
}
