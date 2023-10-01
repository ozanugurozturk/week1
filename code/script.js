// Step 1 - Welcome and introduction
const userName = prompt("Step 1 - Welcome and introduction\n\nPlease enter your name:");
alert(`Welcome, ${userName}! Let's start building your pizza order.`);

// Function to calculate the meal price
function calculateMealPrice(foodChoice, subtypeChoice, age) {
  let basePrice;
  let foodName;
  
  if (foodChoice === '1') {
    const pizzaPrices = {
      'Margherita Pizza': 12,
      'Pepperoni Pizza': 14,
      'Veggie Pizza': 13,
    };
    basePrice = pizzaPrices[subtypeChoice];
    foodName = 'Pizza';
  } else if (foodChoice === '2') {
    const pastaPrices = {
      Spaghetti: 10,
      Alfredo: 12,
      Pesto: 11,
    };
    basePrice = pastaPrices[subtypeChoice];
    foodName = 'Pasta';
  } else if (foodChoice === '3') {
    const saladPrices = {
      Caesar: 8,
      Greek: 9,
      Caprese: 7,
    };
    basePrice = saladPrices[subtypeChoice];
    foodName = 'Salad';
  }

  // Calculate the final price based on age
  const isChild = age < 18;
  const finalPrice = isChild ? basePrice - 2 : basePrice;

  return { foodName, finalPrice };
}

// Function to handle the order confirmation
function confirmOrder(foodChoice, subtypeChoice, age) {
  const { foodName, finalPrice } = calculateMealPrice(foodChoice, subtypeChoice, age);

  const confirmationMessage = `Step 5 - Order Confirmation\n\n${userName}, your choice is ${subtypeChoice} ${foodName}, and it costs $${finalPrice}.\n\nProceed with the order?\n1 - Yes\n2 - No`;

  let confirm;
  do {
    confirm = prompt(confirmationMessage);
    if (confirm !== '1' && confirm !== '2') {
      alert("Invalid input. Please select again.");
    }
  } while (confirm !== '1' && confirm !== '2');

  if (confirm === '1') {
    alert(`Thank you for your order, ${userName}! Your delicious meal will be prepared. See you soon! 👋🏼`);
    return true; // Order confirmed
  } else {
    alert(`Order not confirmed. Returning to food choice.`);
    return false; // Order not confirmed
  }
}

// Start the process with a loop to return back to start point if it is not confirmed
while (true) {
  // Step 2 - Food choice
  let foodChoice;
  do {
    foodChoice = prompt(
      `Step 2 - Food Choice\n\nPlease choose a food item:\n1. Pizza\n2. Pasta\n3. Salad`
    );
    if (foodChoice !== '1' && foodChoice !== '2' && foodChoice !== '3') {
      alert("Invalid input. Please select again.");
    }
  } while (foodChoice !== '1' && foodChoice !== '2' && foodChoice !== '3');

  // Show a message about the chosen food
  let foodName;
  if (foodChoice === '1') {
    foodName = 'Pizza';
  } else if (foodChoice === '2') {
    foodName = 'Pasta';
  } else if (foodChoice === '3') {
    foodName = 'Salad';
  }
  alert(`You have chosen ${foodName}, great choice!!!`);

  // Step 3 - Subtype choice
  let subtypeChoice;
  do {
    if (foodChoice === '1') {
      subtypeChoice = prompt(
        `Step 3 - Subtype Choice\n\nGreat! You've chosen Pizza. Now, choose a subtype:\n1. Margherita\n2. Pepperoni\n3. Veggie`
      );
    } else if (foodChoice === '2') {
      subtypeChoice = prompt(
        `Step 3 - Subtype Choice\n\nGreat! You've chosen Pasta. Now, choose a subtype:\n1. Spaghetti\n2. Alfredo\n3. Pesto`
      );
    } else if (foodChoice === '3') {
      subtypeChoice = prompt(
        `Step 3 - Subtype Choice\n\nGreat! You've chosen Salad. Now, choose a subtype:\n1. Caesar\n2. Greek\n3. Caprese`
      );
    }

    if (!subtypeChoice || isNaN(subtypeChoice) || subtypeChoice < 1 || subtypeChoice > 3) {
      alert("Invalid input. Please select again.");
    }
  } while (!subtypeChoice || isNaN(subtypeChoice) || subtypeChoice < 1 || subtypeChoice > 3);

  // Map the subtype choice to the actual subtype name
  const subtypeNames = (foodChoice === '1') ? ['Margherita', 'Pepperoni', 'Veggie'] :
                       (foodChoice === '2') ? ['Spaghetti', 'Alfredo', 'Pesto'] :
                                              ['Caesar', 'Greek', 'Caprese'];
  subtypeChoice = subtypeNames[parseInt(subtypeChoice) - 1];

  // Showing a message about the chosen subtype
  alert(`You have chosen ${subtypeChoice}, great choice!!!`);

  // Step 4 - Age
  let age;
  do {
    age = parseInt(prompt(`Step 4 - Age\n\nPlease enter your age:`));
    if (isNaN(age) || age < 0) {
      alert("Invalid input. Please enter a valid age.");
    }
  } while (isNaN(age) || age < 0);

  // Call the function to confirm the order
  if (!confirmOrder(foodChoice, subtypeChoice, age)) {
    // If order is not confirmed, it breaks the loop and returns back to the food choice
    continue;
  }

  // If the order is confirmed, it exits from the loop
  break;
}