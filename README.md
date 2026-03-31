
# <p align="center">
  <h1 align="center">🚀 E-commerce API (Products & Categories)</h1>
</p>

A minimal and professional **REST API** built using **Node.js** and **Express.js (v5)** that handles products and categories with proper routing and error handling.

---

## 📌 Features

- ⚡ Express.js server (v5)
- 📦 Products & Categories endpoints
- 📡 RESTful API design
- 🧩 JSON middleware support
- ❌ Custom 404 error handling (Wildcard route)
- 🧪 Easy testing via Browser, Postman, or cURL

---

## 🛠️ Tech Stack

- Node.js (v18+ recommended)
- Express.js ^5.x

---

## 📂 Project Structure

```

ecommerce-api/
│
├── node_modules/
├── package.json
├── package-lock.json
└── server.js

````

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/ecommerce-api.git
cd ecommerce-api
npm install
````

---

## ▶️ Run Server

```bash
npm start
```

OR

```bash
node server.js
```

---

## 🌐 Server

```
http://localhost:4000
```

---

## 📡 API Endpoints

### 🛒 Products

| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| GET    | /products | Get all products  |
| POST   | /products | Add a new product |

---

### 🗂️ Categories

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | /categories | Get all categories    |
| POST   | /categories | Create a new category |

---

## ❌ 404 Handling (Wildcard Route)

All undefined routes are handled using a fallback middleware:

```javascript
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});
```

---

## 🧪 API Testing

### ✅ Browser (GET)

```
http://localhost:4000/products
http://localhost:4000/categories
```

---

### ✅ cURL

```bash
# Get products
curl http://localhost:4000/products

# Get categories
curl http://localhost:4000/categories

# Create product
curl -X POST http://localhost:4000/products \
-H "Content-Type: application/json" \
-d "{}"

# Create category
curl -X POST http://localhost:4000/categories \
-H "Content-Type: application/json" \
-d "{}"
```

---

### ✅ Postman

* Method: GET / POST
* URL: `http://localhost:4000/...`

---

## ⚙️ Scripts

| Script | Command        |
| ------ | -------------- |
| start  | node server.js |

---

## ⚠️ Important Notes

* Express v5 does **not support `'*'` wildcard routes**
* Use fallback middleware (`app.use(...)`) for 404 handling
* Always place wildcard route **at the end**

---

## 🚀 Future Improvements

* 📦 Database integration (MongoDB)
* 🧱 MVC architecture
* 🔐 Authentication (JWT)
* ✅ Input validation
* ⚠️ Centralized error handling

---

## 👨‍💻 Author

**Yashav Shukla**
GitHub: [https://github.com/yashavshukla](https://github.com/yashav-shukla)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
