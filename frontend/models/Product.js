export default class Product {
    constructor({name, image, description}){
        this.name = name;
        this.image = image;
        this.description = description;
    }

    getName(){
        return this.name.slice(0, 20);
    }

    getDescription(){
        return this.name.slice(0, 40);
    }
}