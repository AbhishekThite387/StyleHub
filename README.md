# 🛍️ StyleHub — Full-Stack MERN Fashion E-Commerce Platform

## DevSecOps Pipeline

This project uses Jenkins for CI/CD automation, SonarQube for code quality and security analysis, and Trivy for Docker image vulnerability scanning.

<div align="center">

![StyleHub](https://img.shields.io/badge/StyleHub-Fashion%20E--Commerce-black?style=for-the-badge)

A modern full-stack fashion e-commerce platform built with React, Node.js, Express, MongoDB, and Tailwind CSS.

</div>

---

## ✨ Overview

**StyleHub** is a full-stack fashion e-commerce web application designed to provide a smooth and modern online shopping experience.

The platform allows customers to browse fashion products, search and filter collections, view product details, manage their shopping cart, place orders, and view their order history.

It also includes a dedicated **Admin Panel** where administrators can add products, upload product images, manage product listings, and manage customer orders.

### Application Architecture

```text
Customer Frontend
       │
       ▼
React + Vite
       │
       │ REST API
       ▼
Node.js + Express
       │
       ├──────────────► MongoDB Atlas
       │
       └──────────────► Cloudinary

Admin Panel
       │
       ▼
React + Vite
       │
       │ REST API
       ▼
Node.js + Express
```

---

# 🎯 Project Goals

The main goals of StyleHub are:

- Build a complete MERN stack e-commerce application
- Implement user authentication
- Create a responsive fashion shopping interface
- Store application data using MongoDB
- Upload and manage product images using Cloudinary
- Implement shopping cart functionality
- Implement order placement and order history
- Build a separate admin dashboard
- Practice REST API development
- Connect frontend, backend, database, and cloud services
- Deploy a production-ready full-stack application

---

# 🛒 Customer Features

## 🔐 User Authentication

Users can:

- Create a new account
- Login using email and password
- Logout from the application
- Authenticate using JWT
- Access protected user functionality

Passwords are securely hashed before being stored in MongoDB.

---

## 🏠 Modern Homepage

The homepage includes:

- Fashion-focused hero section
- Latest collection
- Best sellers
- Shopping policies
- Newsletter subscription
- Responsive navigation

---

## 👗 Product Collection

Customers can browse products based on:

- Men
- Women
- Kids

Products can also be organized by:

- Topwear
- Bottomwear
- Winterwear

---

## 🔎 Product Search

Users can search for products using the built-in search functionality.

---

## 🏷️ Product Filtering

Customers can filter products based on:

- Category
- Product type
- Price range

---

## ↕️ Product Sorting

Products can be sorted based on:

- Price: Low to High
- Price: High to Low
- Latest products

---

## 📄 Product Details

Each product has a dedicated product page containing:

- Product images
- Product name
- Product description
- Product price
- Available sizes
- Category
- Related products
- Add to cart functionality

---

## 🛒 Shopping Cart

Customers can:

- Add products to cart
- Select product sizes
- Increase product quantity
- Decrease product quantity
- Remove products
- View cart total
- Continue to checkout

---

## 📦 Order Management

Customers can:

- Place orders
- Enter delivery information
- Select payment method
- View previous orders
- Check order status

### Current Payment Method

```text
Cash on Delivery
```

---

## 📱 Responsive Design

The customer website is designed for:

- Desktop
- Laptop
- Tablet
- Mobile

---

# 👨‍💼 Admin Panel

StyleHub includes a separate administration application.

## ➕ Add Products

Administrators can:

- Upload product images
- Add product name
- Add product description
- Select category
- Select sub-category
- Set product price
- Select available sizes
- Mark products as best sellers

---

## 🖼️ Cloudinary Image Upload

Product images are uploaded and stored using **Cloudinary**.

The image upload flow is:

```text
Admin
  │
  ▼
Select Product Images
  │
  ▼
Admin Panel
  │
  ▼
Backend API
  │
  ▼
Multer
  │
  ▼
Cloudinary
  │
  ▼
Image URL
  │
  ▼
MongoDB
```

---

## 📋 Product Management

Administrators can:

- View products
- Manage product listings
- Remove products
- Manage product information

---

## 📦 Order Management

Administrators can:

- View customer orders
- View order details
- Update order status
- Manage order fulfillment

---

# 🧰 Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | User interface |
| Vite | Frontend development and build tool |
| React Router | Client-side routing |
| Tailwind CSS | UI styling |
| Axios | API communication |
| React Toastify | Notifications |
| JavaScript | Application logic |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication |
| bcrypt | Password hashing |
| Multer | File upload handling |
| Validator | Input validation |
| Cloudinary | Image storage |

## Cloud Services

| Service | Purpose |
|---|---|
| MongoDB Atlas | Database hosting |
| Cloudinary | Product image storage |
| Vercel | Frontend deployment |

---

# 🏗️ Application Architecture

```text
                         ┌─────────────────────┐
                         │      Customer       │
                         │      Browser        │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  React Frontend     │
                         │  Vite + Tailwind    │
                         └──────────┬──────────┘
                                    │
                              REST API
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Node.js + Express   │
                         │      Backend        │
                         └──────┬───────┬──────┘
                                │       │
                     ┌──────────┘       └──────────┐
                     ▼                             ▼
            ┌────────────────┐             ┌────────────────┐
            │ MongoDB Atlas  │             │   Cloudinary   │
            │                │             │                │
            │ Users          │             │ Product Images │
            │ Products       │             │                │
            │ Orders         │             └────────────────┘
            └────────────────┘


                         ┌─────────────────────┐
                         │     Administrator   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    Admin Panel      │
                         │    React + Vite     │
                         └──────────┬──────────┘
                                    │
                              REST API
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      Backend        │
                         └─────────────────────┘
```

---

# 🔄 User Shopping Flow

```text
Visit StyleHub
      │
      ▼
Browse Collection
      │
      ▼
Search / Filter Products
      │
      ▼
View Product Details
      │
      ▼
Select Size
      │
      ▼
Add to Cart
      │
      ▼
Review Cart
      │
      ▼
Enter Delivery Details
      │
      ▼
Select Cash on Delivery
      │
      ▼
Place Order
      │
      ▼
Order History
```

---

# 🔐 Authentication Architecture

StyleHub uses JWT-based authentication.

```text
User
 │
 │ Login / Register
 ▼
React Frontend
 │
 │ API Request
 ▼
Express API
 │
 ▼
User Controller
 │
 ▼
MongoDB
 │
 │ Verify Credentials
 ▼
JWT Token
 │
 ▼
React Frontend
 │
 ▼
Authenticated Requests
```

Protected requests are validated by backend authentication middleware.

```text
React
  │
  │ JWT Token
  ▼
Express API
  │
  ▼
Authentication Middleware
  │
  ├── Valid Token ──► Continue
  │
  └── Invalid Token ─► Reject
```

---

# 📁 Project Structure

```text
StyleHub/
│
├── backend/
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── mongodb.js
│   │
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── adminAuth.js
│   │   ├── auth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── cartRoute.js
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   └── userRoute.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── BestSeller.jsx
│   │   │   ├── CartTotal.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LatestCollection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsLetterBox.jsx
│   │   │   ├── OurPolicy.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   ├── RelatedProducts.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Title.jsx
│   │   │
│   │   ├── context/
│   │   │   └── ShopContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Collection.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   └── Product.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── vercel.json
│
├── styleHub_admin/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Add.jsx
│   │   │   ├── List.jsx
│   │   │   └── Orders.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── vercel.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account
- Cloudinary account
- Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/Abhiii/stylehub.git
cd stylehub
```

---

## 2. Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

Open another terminal:

```bash
cd backend
npm install
```

### Admin Panel

Open another terminal:

```bash
cd styleHub_admin
npm install
```

---

# 3. Configure Environment Variables

## Backend `.env`

Create:

```text
backend/.env
```

Add:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret
```

> Never commit `.env` files or secret credentials to GitHub.

---

## Frontend `.env`

Create:

```text
frontend/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Admin `.env`

Create:

```text
styleHub_admin/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# 4. Start the Backend

From the `backend` directory:

```bash
npm run server
```

Backend:

```text
http://localhost:4000
```

Expected output:

```text
Server is running on port : 4000
MongoDB connected
```

---

# 5. Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 6. Start the Admin Panel

Open another terminal:

```bash
cd styleHub_admin
npm run dev
```

Admin panel:

```text
http://localhost:5174
```

---

# 🌐 Local Development URLs

| Application | URL |
|---|---|
| Customer Website | `http://localhost:5173` |
| Admin Panel | `http://localhost:5174` |
| Backend API | `http://localhost:4000` |

---

# 🔌 API Endpoints

## User APIs

```text
POST /api/user/register
POST /api/user/login
POST /api/user/admin
```

## Product APIs

```text
POST /api/product/add
POST /api/product/remove
GET  /api/product/list
POST /api/product/single
```

## Cart APIs

```text
POST /api/cart/add
POST /api/cart/update
POST /api/cart/get
```

## Order APIs

```text
POST /api/order/place
POST /api/order/userorders
POST /api/order/list
POST /api/order/status
```

> API routes may evolve as the project is extended.

---

# 🔒 Security

StyleHub implements several security practices:

- JWT-based authentication
- Password hashing
- Environment variables for secrets
- Authentication middleware
- Admin authentication middleware
- Input validation
- Protected API endpoints
- CORS configuration

Sensitive credentials such as:

```text
MongoDB URI
JWT Secret
Cloudinary API Key
Cloudinary API Secret
Admin Credentials
```

are stored using environment variables.

---

# 🗄️ Database

StyleHub uses **MongoDB Atlas**.

Main application data includes:

```text
Users
Products
Orders
```

Mongoose is used to define schemas and interact with MongoDB.

---

# ☁️ Cloudinary Integration

Cloudinary is used for product image storage.

The backend configuration uses:

```env
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_api_secret
```

The product images are uploaded to Cloudinary and the resulting URLs are stored with the product data.

---

# 🎨 UI & Design

StyleHub follows a clean and minimal fashion-oriented design.

### Design characteristics

- Minimal layout
- Fashion-focused typography
- Pink accent color
- Responsive product grids
- Product image hover effects
- Clean navigation
- Mobile-friendly layouts
- Simple checkout experience

---

# 📱 Responsive Design

The application is optimized for:

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

Tailwind CSS responsive utilities are used throughout the application.

---

# 🧪 Application Testing

## Customer Flow

```text
1. Open StyleHub
2. Create an account
3. Login
4. Browse products
5. Search products
6. Filter products
7. Open product details
8. Select size
9. Add product to cart
10. Update quantity
11. Proceed to checkout
12. Enter delivery information
13. Place order
14. View order history
```

## Admin Flow

```text
1. Open Admin Panel
2. Login as administrator
3. Add product
4. Upload product images
5. View product list
6. Manage products
7. View customer orders
8. Update order status
```

---

# 🚧 Current Limitations

The current version supports:

```text
Cash on Delivery
```

Online payment processing is not currently integrated.

---

# 🔮 Future Enhancements

Planned improvements include:

- [ ] Razorpay / Stripe payment integration
- [ ] Product reviews and ratings
- [ ] Wishlist improvements
- [ ] Discount coupons
- [ ] Email order notifications
- [ ] Forgot password functionality
- [ ] Product recommendations
- [ ] Advanced admin analytics
- [ ] Sales dashboard
- [ ] Inventory management
- [ ] Automated email notifications
- [ ] Improved order tracking

---

# 📚 Learning Outcomes

This project provided practical experience with:

- Full-stack MERN development
- React component architecture
- React Context API
- REST API development
- Express.js routing
- MongoDB and Mongoose
- JWT authentication
- Password hashing
- Backend middleware
- File uploads
- Cloudinary integration
- Admin dashboard development
- Cart management
- Order management
- Responsive UI development
- Environment variable management
- Frontend-backend integration
- Cloud deployment fundamentals

---

# 🤝 Contributing

Contributions are welcome.

### Create a feature branch

```bash
git checkout -b feature/new-feature
```

### Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

### Push the branch

```bash
git push origin feature/new-feature
```

Then open a Pull Request.

---

# 🐛 Issues

If you find a bug or have an improvement suggestion, create an issue in the repository.

When reporting an issue, include:

- Description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Console/API errors
- Screenshots when useful

---

# 👨‍💻 Author

<div align="center">

### Abhishek Thite

**Full-Stack Developer | DevOps Enthusiast**

Built **StyleHub** as a practical full-stack e-commerce project to strengthen skills in modern web development, backend engineering, database management, cloud services, and deployment.

[![GitHub](https://img.shields.io/badge/GitHub-Abhiii-181717?style=for-the-badge&logo=github)](https://github.com/Abhiii)

</div>

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐.

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

## 🛍️ StyleHub

### Discover Your Style. Wear Your Confidence.

**Made with ❤️ using the MERN Stack.**

</div>
