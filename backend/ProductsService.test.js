import ProductsService from "./ProductsService";
import isPromise from "is-promise";

test("ProductService is an object", () => {
    expect(typeof ProductsService).toBe("object");
})

test("It has a fetchList() function", () => {
    expect(typeof ProductsService.fetchList).toBe("function");
})

test("fetchList returns promise", async () => {
    const promise = isPromise((ProductsService.fetchList()));
    expect(promise).toBeTruthy();
})

test("fetchList returns array of elements", async () => {
    const products = await ProductsService.fetchList();
    expect(products.length).toBeGreaterThan(0);
})
