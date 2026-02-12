# Pizza-Window-SliceTrack 🍕

A real-time pizza ordering and tracking web application built using the MERN stack.  
Users can browse pizzas, place orders, and track order status live.  
An admin panel is available to update order statuses.

---

## Tech Stack

Frontend:
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios
- Socket.io Client

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- dotenv
- CORS

---

## Features

- Add to cart
- Checkout system
- Unique order ID generation
- Real-time order tracking
- Admin dashboard to update order status
- Live updates using WebSockets
- Responsive UI

---

## Folder Structure

```
Pizza-Window-SliceTrack/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── context/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── socket/
│   └── server.js
│
└── README.md
```

---

## Setup Instructions

### Clone the repository

```bash
git clone https://github.com/your-username/Pizza-Window-SliceTrack.git
cd Pizza-Window-SliceTrack
```

---

## Backend Setup (Port: 5050)

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```
PORT=5050
MONGO_URI=your_mongodb_connection_string
```

Run the backend:

```bash
npm run dev
```

Backend will run on:
```
http://localhost:5050
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## How It Works

1. User selects pizza items  
2. Adds them to cart  
3. Places an order  
4. Order ID is generated  
5. User is redirected to tracking page  
6. Admin updates order status  
7. Status updates in real-time using Socket.io  

---

## Future Improvements

- Payment integration
- Authentication system
- Order history
- Live delivery tracking

---

## Author

Om Kumar Singh  
BTech – Electrical & Computer Engineering  
