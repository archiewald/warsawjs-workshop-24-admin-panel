import fetch from "../fixtures/fakeFetch";
import ProductsService from "./ProductsService";
import isPromise from "is-promise";

const service = ProductsService(fetch);

test("ProductService is an object", () => {
    expect(typeof service).toBe("object");
})

test("It has a fetchList() function", () => {
    expect(typeof service.fetchList).toBe("function");
})

test("fetchList returns promise", () => {
    const promise = isPromise((service.fetchList()));
    expect(promise).toBeTruthy();
})

test("fetchList returns array of elements", async () => {
    const products = await service.fetchList();
    expect(products.length).toBeGreaterThan(0);
})

