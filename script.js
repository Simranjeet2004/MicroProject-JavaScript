// Get the button element with the ID "getAsync"
const getAsyncBtn = document.getElementById("getAsync");

// Add an event listener to the button that triggers the getDataAsync function when clicked
getAsyncBtn.addEventListener('click', getDataAsync);

// Define the API URL to fetch data from
const apiURL = 'http://localhost:3000/api/items';

// Define an asynchronous function to get data from the API
async function getDataAsync() {
    // Alert the user that data fetching is about to begin
    alert("fetch with await");
    
    // Use fetch to get data from the API and wait for the response
    const response = await fetch(apiURL);
    // Parse the JSON data from the response
    const data = await response.json();
    // Log the retrieved data to the console for debugging purposes
    console.log(data); 
    // Initialize a variable to hold the HTML content for the list
    let ulContent = `<ul class="styled-list">`;
    // Loop through each element in the data array
    for (const element of data) {
        // Append a list item to the ulContent variable for each element
        ulContent += `<li><span class="item-name">${element.name}</span>: <span class="item-price">${element.price}</span></li>`;
    }
    // Close the unordered list tag
    ulContent += "</ul>";
    
    // Update the inner HTML of the "data-container" element with the generated list
    document.getElementById("data-container").innerHTML = ulContent;
}