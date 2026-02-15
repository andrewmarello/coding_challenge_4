console.log(`Hello! This is Coding Challenege 4, by Andrew Marello.`);

// Step 2: Create Arrays

let products = [
    { name: "iphone", category: "electronics", price: 799, inventory: 20 },
    { name: "ipad", category: "electronics", price: 999, inventory: 15 },
    { name: "sweatshirt", category: "apparel", price: 69, inventory: 50},
    { name: "chicken", category: "groceries", price: 19, inventory: 100},
    { name: "broom", category: "household", price: 29, inventory: 50}
];

// Step 3: for...of Loop cycling through products and applying discounts

for(const product of products) {
    let discount = 0;

    switch(product.category) {
        case "electronics":
        discount = 0.20;
        break;
        case "apparel":
        discount = 0.15;
        break;
        case "groceries":
        case "household":
        discount = 0.10;
        break;
        default:
            discount = 0;
    }
    product.discount = discount;
    product.finalPrice = product.price - (product.price * discount);
}
console.log(products);
