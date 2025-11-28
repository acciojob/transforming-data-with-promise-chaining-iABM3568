//your JS code here. If required.
// Get references to DOM elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Add click event listener to the button
button.addEventListener('click', () => {
  // Get the input value and convert to number
  const initialValue = Number(input.value);
  
  // Clear previous output
  output.textContent = '';
  
  // Start the promise chain
  // First Promise: Wait 2 seconds and display the initial number
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialValue);
    }, 2000);
  })
  .then((result) => {
    // Display initial result
    output.textContent = `Result: ${result}`;
    
    // Second Promise: Wait 2 seconds, multiply by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 2000);
    });
  })
  .then((result) => {
    // Display result after multiplication
    output.textContent = `Result: ${result}`;
    
    // Third Promise: Wait 1 second, subtract 3
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result - 3);
      }, 1000);
    });
  })
  .then((result) => {
    // Display result after subtraction
    output.textContent = `Result: ${result}`;
    
    // Fourth Promise: Wait 1 second, divide by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result / 2);
      }, 1000);
    });
  })
  .then((result) => {
    // Display result after division
    output.textContent = `Result: ${result}`;
    
    // Fifth Promise: Wait 1 second, add 10
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result + 10);
      }, 1000);
    });
  })
  .then((result) => {
    // Display final result
    output.textContent = `Final Result: ${result}`;
  })
  .catch((error) => {
    // Handle any errors in the promise chain
    output.textContent = `Error: ${error.message}`;
  });
});