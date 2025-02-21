# MERN Chat Application with Socket.io

## Introduction
This is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Socket.io for real-time communication.

## Features
- User authentication (Signup/Login)
- Real-time messaging
- Group and one-to-one chat support
- Online/offline status indication
- Message history storage in MongoDB
- Typing indicator
- Responsive UI

## Technologies Used
### Frontend:
- React.js (with Hooks and Context API)
- Axios for API requests
- Tailwind CSS for styling

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose
- Socket.io for real-time messaging
- JSON Web Tokens (JWT) for authentication
- bcrypt.js for password hashing

## Installation

### Prerequisites:
- Node.js installed
- MongoDB installed and running locally or via a cloud service

### Steps to Run the Application

#### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/chat-app.git
cd chat-app
```

#### 2. Install Dependencies
##### Backend
```sh
cd server
npm install
```
##### Frontend
```sh
cd client
npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file inside the `server` folder and add the following:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

#### 4. Start the Server
```sh
cd server
npm start
```

#### 5. Start the Client
```sh
cd client
npm start
```

The application should now be running at `http://localhost:3000/`.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/user` - Get logged-in user details

### Chats
- `GET /api/chats` - Fetch user chats
- `POST /api/chats` - Create a new chat

### Messages
- `GET /api/messages/:chatId` - Fetch messages for a chat
- `POST /api/messages` - Send a new message

## WebSocket Events
- `connection` - Establish socket connection
- `newMessage` - Send/receive new messages in real time
- `typing` - Notify when a user is typing
- `stopTyping` - Notify when a user stops typing

## Future Improvements
- Message notifications
- Read receipts
- Voice/video calling integration
- AI chatbot support

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is open-source and available under the MIT License.

