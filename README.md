### README.md

```markdown
# 🎄 Christmas Products Web App

This project is a **micro-assignment** for creating a web application using **Express.js**. It demonstrates API integration, server-side data handling, and client-side interactions with a festive Christmas theme.

---

## 📋 Instructions Fulfilled

1. **Express Application Setup:**
   - Installed required dependencies: `express` and `nodemon`.
   - Created a folder structure with `data` for JSON and `Public` for static website files.

2. **Data Handling:**
   - Added a `data/items.json` file containing 8 items (objects).
   - Implemented API endpoint `/api/items` to serve JSON data.

3. **Frontend Development:**
   - Designed a static HTML website with at least 4 pages.
   - Included CSS for professional and elegant design.
   - Added an HTML page with a button to fetch and display JSON data.

4. **JavaScript Implementation:**
   - Used `Async/Await` for API requests.
   - Handled interactions dynamically, updating the webpage upon fetching data.

5. **Server Deployment:**
   - Ran the application locally using `nodemon` and served static files via Express.

---

## 🌐 API Documentation

### `GET /api/items`
Fetches product data from the `data/items.json` file.

**Response Example:**
```json
[
  {"name": "Christmas Tree", "price": "$50"},
  {"name": "Ornaments", "price": "$50"},
  {"name": "Wreaths", "price": "$30"},
  {"name": "Stockings", "price": "$80"},
  {"name": "TableTop Tree", "price": "$50"},
  {"name": "Light Strings", "price": "$50"},
  {"name": "Ribbon", "price": "$30"},
  {"name": "Christmas Candle", "price": "$80"}
]
```

---

## 📂 Project Structure

```
project-directory/
├── app.js                  # Main server file
├── data/
│   └── items.json          # JSON file containing product data
├── Public/
│   ├── index.html          # Home page
│   ├── about.html          # About page
│   ├── products.html       # Product display page
│   ├── contact.html        # Contact page
│   ├── style.css           # CSS for styling
│   └── script.js           # JavaScript for client-side logic
└── package.json            # Node.js project metadata
```

---

## 💻 Code Explanation

### **Server-Side (app.js):**
```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Import JSON data
let items;
try {
  items = require('./data/items.json');
} catch (error) {
  console.error("Error loading items.json. Please check the file path or its contents.");
  items = [];
}

// Middleware to serve static files
app.use('/', express.static(path.join(__dirname, 'Public')));

// Route to send JSON data
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### **Frontend JavaScript (script.js):**
```javascript
document.getElementById('getAsync').addEventListener('click', () => {
  fetch('/api/items')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('data-container');
      container.innerHTML = data.map(item => `
        <div>
          <strong>${item.name}</strong>: ${item.price}
        </div>
      `).join('');
    })
    .catch(error => console.error('Error fetching data:', error));
});
```

🖼HTML Layout
Navigation Bar:
html
Copy code
<ul id="navbar">
  <li><a href="index.html">Home</a></li>
  <li><a href="product.html">Shop</a></li>
  <li><a href="about.html">About</a></li>
  <li><a class="active" href="info.html">Price Info</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
Price Info Section:
html
Copy code
<section id="data-section">
  <fieldset>
    <div class="submit">
      <input type="button" id="getAsync" value="Get Price Info of Products">
    </div>
  </fieldset>
  <div id="data-container" class="data-container"></div>
</section>
Footer:
html
Copy code
<footer class="section-p1">
  <div class="col">
    <h4>Contact</h4>
    <p><strong>Address:</strong> 120 Bloor Street East, Toronto</p>
    <p><strong>Phone:</strong> +1.437.788NOVELTY</p>
    <p><strong>Hours:</strong> 10:00-17:00, Mon - Sat</p>
  </div>
  <div class="copyright">
    <p>COPYRIGHT © 2023 NOVELTY ® ALL RIGHTS RESERVED.</p>
  </div>
</footer>



