import db from "./db.json";

const BASE_URL = "http://localhost:3000";

export default function fetch(url){
    switch(url){
        case BASE_URL + "/products":
        return Promise.resolve({
            json(){
                return db.products;
            } 
        })
    }
}