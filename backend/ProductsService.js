class ProductsService {
    url = 'http://localhost:3000/products';
    cacheTime = 5*60*1000;
    lastFetchTime = 0;

    async fetchList() {
        if(new Date().getTime() - this.lastFetchTime > this.cacheTime){
            console.log("Hi!")
            this.lastFetchTime = new Date().getTime();
            this.response = await this.fetch(this.url)
            .then(body => body.json());
            console.log(this.response)
        }
        return this.response
    }
    
    setFetcher(fetch) {
        this.fetch = fetch;
        return this;
    }
    
}

const service = new ProductsService();

// dependency injection
export default (fetch) => service.setFetcher(fetch);