# Tiny Trail

#### Link Shortener with QR Code Generator

Welcome to the **Link Shortener** app, developed by [Leroy Patient](https://github.com/patient36) ! This project allows you to shorten long URLs and generate a corresponding QR code, making sharing and tracking links more efficient and visually appealing.

## 🚀 Features

- **URL Shortening**: Effortlessly shorten your long URLs into concise and shareable links.
- **QR Code Generation**: Automatically create a QR code for each shortened link, perfect for scanning via mobile devices.
- **Clean and Simple UI**: A minimalist design focusing on usability with a clean interface for generating and managing your shortened links.
- **Trackable Links**: Keep track of your shortened links, manage them, and monitor usage.

## 🛠️ Technologies Used

This app is built with the following technologies:

- **Node.js**: Backend server for handling URL shortening and QR code generation.
- **Express**: Fast and lightweight web framework for building the RESTful API.
- **TypeScript**: For better code quality, strict typing, and easy-to-manage development.
- **NextJS**: For fast rendering and clean flow of code.
- **TailwindCSS**: For styling the pages.
- **QRCode**: To generate QR codes from shortened URLs.
- **MongoDB**: For storing the original and shortened links, as well as metadata.
- **Mongoose**: For interacting with the MongoDB database.

## 🔧 Setup

To get started with the development or deploy the project, follow these simple steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14+)
- MongoDB (either locally or through a cloud service like MongoDB Atlas)
- Git (for cloning the repository)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/patient36/link-shortener.git
   cd link-shortener
   ```

2. **Create a .env file for storing env variables in the backend folder**

   ### Backend .env example

   ```
   PORT = <your desired backend port>
   DB_CONN_STR = <your mongodb connection string>
   BASE_URL = <your backend server full url(eg: http://localhost:5000/)>

   ```

3. **Start the backend server**

   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Create a .env file for storing env variables in the frontend folder**

   ### Frontend .env example

   ```
   NEXT_PUBLIC_API = <your backend API route(eg: http://localhost:5000)>

   ```

5. **Start the frontend development server in a new terminal**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
6. **You are good to go😉 Enjoy the app**
