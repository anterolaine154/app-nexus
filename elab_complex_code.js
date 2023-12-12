// Filename: elab_complex_code.js

/*
 * This code demonstrates a complex and sophisticated implementation of a shopping cart system. 
 * It includes various functions and features such as adding and removing items, calculating the total cost, applying discounts, and more.
 * 
 * Note: This code is purely for demonstration purposes and doesn't include error handling and input validation. It's not a production-ready solution.
 */

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price;
    });
    return total;
  }

  applyDiscount(discountPercentage) {
    const discountFactor = (100 - discountPercentage) / 100;
    const discountedTotal = this.calculateTotal() * discountFactor;
    return discountedTotal;
  }

  printItems() {
    console.log("--- Shopping Cart Items ---");
    this.items.forEach((item) => {
      console.log(`Name: ${item.name} | Price: ${item.price}`);
    });
    console.log("---------------------------");
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Create some sample items
const item1 = new Item("Product 1", 10);
const item2 = new Item("Product 2", 20.5);
const item3 = new Item("Product 3", 15);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

// Print items in the cart
cart.printItems();

// Calculate the total cost
const totalCost = cart.calculateTotal();
console.log(`Total Cost: ${totalCost}`);

// Apply a discount of 20%
const discountedTotal = cart.applyDiscount(20);
console.log(`Discounted Total: ${discountedTotal}`);

// Remove an item from the cart
cart.removeItem(item2);

// Print items in the cart after removal
cart.printItems();

// Calculate the updated total cost
const updatedTotalCost = cart.calculateTotal();
console.log(`Updated Total Cost: ${updatedTotalCost}`);
