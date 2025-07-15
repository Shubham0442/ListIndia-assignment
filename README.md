# Business World
This application is a React-based user interface with a NodeJs based server, consisting of data related to the businesses where authenticated users can add new business.

## Features
### Login and Signup
- Having the email and password fields for login.
- Users Can first signup with required details and after that can login to add the individual content.

### Get all created businesses
- allows user to view the top all the businesses.

### Search the business
- search the business by name, category or location and result will be displayed on dropdown.
- user can select the business form the dropdown menu to get a specific business

### Create New business
- Allows authenticated user to create a new business by filling the required details.

### Technologies Used
- ReactJS: for the frontend.
- Tailwind CSS: Open-source UI library for making user interface.
- Material UI: Open-source UI library for making user interface.
- Redux: Open-source state management library for managing application state.
- MongoDB: for storing data.
- NodeJs and ExpressJs: for API development.
- bcrypt: Open-source library for hashing the password
- jsonwebtoken: Open-source library for generating unique token after user login

### Installation
- Clone the repository
```bash
  git clone https://github.com/Shubham0442/ListIndia-assignment.git
```
#### For frontend:
- Navigate to the frontend folder
```bash
cd frontend/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm start
```
#### For Backend:
- Navigate to the backend folder
```bash
cd backend/
```
- Install dependencies
```bash
npm install
```
- Run the application
```bash
npm run dev
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file on backend 

`PORT` - To run application in local

`SECRET` - secret key for jsonwentoken

`MONGO_URL` - Mongo Atlus URL

To run this project, you will need to add the following environment variables to your .env file on frontend

`REACT_APP_BASE_URL` - Base Url of the Node server
