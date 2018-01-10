import { Category } from "../models/category.model";
import { Injectable } from "@angular/core";
@Injectable()
export class CategoryService{
    private categoriesData:Category[]=[];
    constructor(){
        this.categoriesData=[
            new Category(1,"Mobiles"),
            new Category(2,"Electronics")
        ]
    }
    getCategories(){
        return this.categoriesData;
    }
}
