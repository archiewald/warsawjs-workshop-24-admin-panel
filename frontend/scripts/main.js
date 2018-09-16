import ProductsService from "../../backend/ProductsService"
import ProductsComponent from "../ProductsComponent"

async function setup() {
    const root = document.getElementById("root")
    const service = ProductsService(window.fetch.bind(window));
    const products = await service.fetchList();
    const component = new ProductsComponent(root, products)
    component.render();
}

try {
    setup();
} catch (err) {
    console.error(err);
}