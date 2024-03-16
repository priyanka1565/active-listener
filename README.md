
# Project Title : CRUD-APPLICATION

## Introduction
A CRUD application is a fundamental type of software that performs four key operations: Create, Read, Update, and Delete. These operations are typically associated with managing data within a database or any other storage system. CRUD applications are pervasive in software development, powering various systems from simple to complex, such as content management systems (CMS), e-commerce platforms, customer relationship management (CRM) systems, and more.

## Project Type
| Backend | 




## Directory Structure
src/


## Features
List out the key features of your application.

1. Create: Users can add new product to the system by providing details such as title, author, category, price, quantity, etc.
2. Read: Users can view a list of all product available in the product, along with their details.
3. Update: Users can edit product information such as title,  category, price, quantity, etc.
4. Delete: Users can remove product from the system that are no longer available or relevant.

## design decisions or assumptions
Technology Stack Selection:

1. Chose Node.js with Express.js for the backend due to its lightweight and efficient nature, making it suitable for building RESTful APIs.
Selected MongoDB as the database for its flexibility, scalability, and ease of integration with Node.js applications.
Opted for a frontend framework like React.js for a dynamic and interactive user interface.
RESTful API Design:

2. Designed the backend API following RESTful principles for resource-based routing and standardized endpoints (e.g., GET /books, POST /product, PUT /product/:id, DELETE /product/:id).
User Authentication:

3. Implemented user authentication using JSON Web Tokens (JWT) for stateless and secure authentication.
Stored user passwords securely by hashing them using bcrypt before storing them in the database.
Data Modeling:

4. Designed MongoDB schemas for product, title, and categories to represent the structure of data in the database.
Established relationships between entities (e.g., one-to-many relationship between books and authors) using references or embedding as per requirements.
Validation and Error Handling:

5.Implemented validation checks on user inputs to ensure data integrity and prevent invalid data from being saved to the database.
Implemented error handling middleware to catch and handle errors gracefully, providing meaningful error me

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
npm install express, mongoose, nodemon
npm start
```

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.

#### For Product

## Create a new product
## Method : POST
## API :  http://localhost:3000/api/product

## Request :
 1. {
     "title": "TV",
     "category": "Home_Appliances",
        "file": "testing",
    }


## Response :
     {
        "_id": "65f527272bdf98a8389d71b8",
        "title": "TV",
        "category": "Home_Appliances",
        "file": "testing",
        "__v": 0
    }

## Get all products
## Method : GET
## API :  http://localhost:3000/api/product

## Request :

## Response : 
[
    {
        "_id": "65f527272bdf98a8389d71b8",
        "title": "TV",
        "category": "Home_Appliances",
        "file": "testing",
        "__v": 0
    },
    {
        "_id": "65f527e02bdf98a8389d71bd",
        "id": "1",
        "title": "Freeze",
        "category": "Home_Appliances",
        "file": "testing",
        "__v": 0
    },
    {
        "_id": "65f528102bdf98a8389d71bf",
        "id": "2",
        "title": "Smart_Watch",
        "category": "Home_Appliances",
        "file": "testing",
        "__v": 0
    }
]

## Get a single product by ID
## Method : GET
## API :  http://localhost:3000/api/product/:id

## Request :
{
  "id" : "65f528102bdf98a8389d71bf"
}
## Response
{
    "_id": "65f528102bdf98a8389d71bf",
    "id": "2",
    "title": "Smart_Watch",
    "category": "Home_Appliances",
    "file": "testing",
    "__v": 0
}
# Delete a single product by ID
## Method : DELETE
## API :  http://localhost:3000/api/product/:id

## Request : 
{
    "id": "65f528102bdf98a8389d71bf"

}
## Response :
{
    "error": "Product not found"
}

#### For Contact 

## Create a new contact
## Method : POST
## API :  http://localhost:3000/api/contact/

## Request :
{
    "name":"test",
    "email":"test@gmail.com",
    "message":"This is for testing purpose"
}
## Response :
{
    "name": "test",
    "email": "test@gmail.com",
    "message": "This is for testing purpose",
    "_id": "65f51f9f1feaf558e54000fe",
    "__v": 0
}

## Get all contact 
## Method : GET
## API :  http://localhost:3000/api/contact/

## Request : 

## Response

{
    "name": "test",
    "email": "test@gmail.com",
    "message": "This is for testing purpose",
    "_id": "65f51f9f1feaf558e54000fe",
    "__v": 0
}

## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- MongoDB
- Other libraries/modules