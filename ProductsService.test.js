import ProductService from "./ProductService";
import isPromise from "is-promise";

test("ProductService is an object", () => {
    expect(typeof ProductService).toBe("object");
})

test("It has a fetchList() function", () => {
    expect(typeof ProductService.fetchList).toBe("function");
})

test("fetchList returns promise", async () => {
    const promise = isPromise((ProductService.fetchList()));
    expect(promise).toBeTruthy();
})

test("fetchList returns array of elements", async () => {
    const products = await ProductService.fetchList();
    expect(products.length).toBeGreaterThan(0);
})
