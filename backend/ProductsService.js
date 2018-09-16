class ProductsService {
    url = 'http://localhost:3000/products';
    cacheTime = 5*60*1000;
    lastFetchTime = 0;

    async fetchList() {
        if(new Date().getTime() - this.lastFetchTime > this.cacheTime){
            this.lastFetchTime = new Date().getTime();
            this.response = this.fetch(this.url)
            .then(body => body.json());
        }
        return await this.response
    }
    
    setFetcher(fetch) {
        this.fetch = fetch;
        return this;
    }
    
}

const service = new ProductsService();

// dependency injection
export default (fetch) => service.setFetcher(fetch);