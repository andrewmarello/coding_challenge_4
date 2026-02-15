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

// Step 4: Variable customerType and if...else if chain to apply additional discounts

function applyCustomerDiscount(price, customerType) {
    let additionalDiscount = 0;

    if(customerType === "student") {
        additionalDiscount = 0.05; // 5% additional discount for students
    } else if(customerType === "senior") {
        additionalDiscount = 0.07; // 7% additional discount for seniors
    } else {   
        additionalDiscount = 0; // No additional discount
    } return price - (price * additionalDiscount);
}
console.log("=== Product List with Final Prices ===");
for (const product of products) {
    console.log(`${product.name} (${product.category}) - $${product.finalPrice.toFixed(2)}`);
}

// Step 5: Use for or while loops to simulate checkout process for 3 customers



console.log("=== Checkout Simulation ===\n");

let customerTypes = ["student", "senior", "regular"];
for(let i = 0; i < customerTypes.length; i++) {
    let totalCost = 0;
    let type = customerTypes[i];

    for(const product of products) {
        if(product.inventory > 0) {
            totalCost += applyCustomerDiscount(product.finalPrice, type);
            product.inventory--;
        }
    }
    console.log(`Customer ${i + 1} (${type}) - Total Cost: $${totalCost.toFixed(2)}`);

    console.log("\nRemaining Inventory:");
    for (const product of products) {
        console.log(`${product.name}: ${product.inventory} `);
    }
}

// Step 6: Log each key/value pair for a single product after discounts are applied

