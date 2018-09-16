import { JSDOM } from 'jsdom';

import ProductsComponent from "./ProductsComponent"

beforeAll(() => {
    global.window = new JSDOM().window;
    global.document = window.document;
});

afterAll(() => {
    global.window = null;
    global.document = null;
});

test("ProductsComponent is a class", () => {
    expect(typeof ProductsComponent).toBe("function");
})

test("contains render method", () => {
    const productsComponent = new ProductsComponent();
    expect(typeof productsComponent.render).toBe("function")
})

test('DOM', () => {
    const root = document.createElement('div');
    const component = new ProductsComponent(root);
    component.render();
    expect(root.children.length).toBe(0);
});


// test("render returns array", () => {
//     const productsComponent = new ProductsComponent();
//     expect(productsComponent.render().length).toBeGreaterThan(0)
// })

