import Model from "./Product.js";

test("model exists", () => {
    expect(typeof Model).toBe("function");
});

test("getName() returns trimmed name", () => {
    const fullName = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const model = new Model({name: fullName})
    expect(model.getName()).toBe("Lorem ipsum dolor si");
})