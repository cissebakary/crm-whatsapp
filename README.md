# CRM WhatsApp

This project aims to build a full-stack CRM with WhatsApp Cloud API integration.

- **client** – React frontend (previously bootstrapped with Create React App)
- **server** – Node.js/Express backend
- **server/config** – configuration files
- **server/models** – Mongoose models
- **server/routes** – API route definitions
- **server/controllers** – Express route handlers

This repository is in early setup phase.

## Development

### Backend

1. Create a `.env` file in the root with:

   ```
   MONGO_URI=<your mongo connection string>
   JWT_SECRET=<your secret>
   ```

2. Install dependencies and start the server:

   ```bash
   cd server && npm install && npm start
   ```

The API exposes authentication and contact management endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/contacts` *(authenticated)*
- `POST /api/contacts` *(authenticated)*
- `PUT /api/contacts/:id` *(authenticated)*
- `DELETE /api/contacts/:id` *(authenticated)*

### Frontend

Run the React development server:

```bash
cd client && npm install && npm start
```
