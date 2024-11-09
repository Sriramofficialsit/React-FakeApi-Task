D-mart Cart App


This is a ReactJS application that fetches product data from the Fake Store API and allows users to add products to a shopping cart through a modal interface. The app includes a responsive layout and a modal to view and manage cart items, with options to add and remove items dynamically.

Features


Fetch and Display Products: Displays a list of products with images, titles, and prices fetched from the Fake Store API.
Add to Cart: Allows users to add products to a cart with a responsive "Add to Cart" button.
Cart Count: Displays the current cart count in the navbar.
Cart Modal: Opens a modal showing all items in the cart with the ability to remove them.
Responsive Design: Works on both desktop and mobile devices using Tailwind CSS for styling.


Tech Stack


ReactJS: For building the frontend user interface.
Tailwind CSS: For responsive and modern styling.
JavaScript (ES6+): For dynamic functionality.
HTML: For structuring the components.


Project Structure




├── src
│   ├── components
│   │   ├── Nav.js            # Navbar component displaying cart count and title
│   │   ├── Products.js       # Displays product cards with "Add to Cart" functionality
│   │   ├── CartModal.js      # Modal component displaying cart items with remove options
│   ├── App.js                # Main application logic and state management
│   ├── index.js              # Entry point of the React application
├── public
│   ├── index.html            # HTML template
├── package.json              # Project dependencies and scripts
Installation
Clone the repository:


git clone https://github.com/your-username/d-mart-cart-app.git
cd d-mart-cart-app
Install dependencies:

npm install
Run the application:

npm start
The app will be available at http://localhost:3000.

Usage


Browse products displayed on the main page.
Click the "Add to Cart" button to add a product. If an item is already in the cart, you will see an alert.
View the cart count in the navbar. Click the "Cart" button to open the modal and view all items in the cart.
In the Cart Modal, you can remove items from the cart by clicking "Remove from Cart".


Deployment


The app is deployed on Netlify. Visit the live site here: Live Demo on Netlify

Notes


Data is fetched from Fake Store API for demonstration purposes.
This project is open-source and available on GitHub.
Contributing
Feel free to open issues or submit pull requests with improvements!

License


This project is licensed under the MIT License.