class ProductsService {

    products = 'http://localhost:3000/products';

    async fetchList() {
        return await this.fetch(this.products)
            .then(body => body.json());
    }
    
    setFetcher(fetch) {
        this.fetch = fetch;
        return this;
    }
    
}

const service = new ProductsService();

// dependency injection
export default (fetch) => service.setFetcher(fetch);