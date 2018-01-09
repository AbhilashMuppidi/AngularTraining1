import { Category } from "../models/category.model";

export class CategoryService{
    private categoriesData:Category[]=[];
    constructor(){
        this.categoriesData=[
            new Category(1,"Mobiles"),
            new Category(1,"Electronics")
        ]
    }
    getCategories(){
        return this.categoriesData;
    }
}
