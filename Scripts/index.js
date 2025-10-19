//Contains the entire assignment logic, triggered by the button click.
function startCalculation() {
    console.clear();
    console.log("--- JS Assignment 2: Keywords, String Methods, and Parse ---");

    // 1. Ask the user to enter a price tag using prompt()
    // Keywords used: const, prompt()
    const priceInput = prompt("Please enter a price tag (e.g., $49.99):");

    // --- Error Handling for cancelled prompt ---
    if (priceInput === null || priceInput.trim() === "") {
        console.log("Operation cancelled or no input provided.");
        return;
    }

    console.log(`\nStep 1 (Input): Price received: ${priceInput}`);

    // 2. Remove the dollar-sign before conversion (using String Method: replace)
    const priceStringClean = priceInput.replace('$', '').trim();
    console.log(`Step 2 (String Method): '$' removed: ${priceStringClean}`);

    // 3. Convert the input from string to number (using parseFloat)
    const originalPrice = parseFloat(priceStringClean);

    // --- Error Handling for invalid number ---
    if (isNaN(originalPrice) || originalPrice <= 0) {
        console.error(`\nError: Invalid price detected: ${priceInput}. Please try again with a number format.`);
        return;
    }
    console.log(`Step 3 (Parse): Converted price to number: ${originalPrice.toFixed(2)}`);

    // 4. Reduce the price by 10 percent
    const discountRate = 0.10; 
    const discountAmount = originalPrice * discountRate;
    
    // Calculate the new price
    const newPriceValue = originalPrice - discountAmount;
    
    console.log(`Step 4 (Calculation): Discount amount is: ${discountAmount.toFixed(2)}`);
    
    // Round the new price to two decimal places for currency formatting
    const finalPriceRounded = newPriceValue.toFixed(2);
    
    // Construct the final output string
    const finalOutputMessage = `Your new price is: $${finalPriceRounded}`;

    // 5. Print out the new price using console.log()
    console.log(`\nStep 5 (Output): ${finalOutputMessage}`);
    console.log("-----------------------------------------");
}