# Firebase Cloud Functions REST API

This is a Node.js application that runs on Firebase Cloud Functions and provides a REST API for interacting with a Firestore database. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on a collection of documents in Firestore.

![connections](https://i.ytimg.com/vi/iIVlRZIo2-c/maxresdefault.jpg)

### Clone the repository and install dependencies:

## Geting Start from the index.js file

creating api

    firebase-admin: 
`the Firebase Admin SDK, used to authenticate with Firebase and access Firestore`

    firebase-functions: 

`the Firebase Cloud Functions SDK, used to define and deploy cloud functions`

    express: 
`a lightweight web framework for Node.js, used to handle HTTP requests and responses`

    cors:
`a middleware for Express that enables Cross-Origin Resource Sharing (CORS)`

    app.use(cors({origin : true})); 

`enables Cross-Origin Resource Sharing (CORS) for your API, which allows requests from other domains or origins to access your API's resources.`

    app.use(express.json()); 
`is a middleware function provided by the Express framework that parses incoming request data with a JSON payload. This means that it allows the application to read the JSON data sent in the request body of a POST or PUT request, and convert it into a JavaScript object. This makes it easier to access the data and manipulate it as needed in the API's logic.`


### API Endpoints
The API has the following endpoints:

    GET /api/details
----- >  `Retrieves all documents in the SunilData collection.`

#### Output of API

![output API](/functions/assets/api%20json.png)

    POST /api/details/addData
----- >  `Adds a new document to the SunilData collection. 
The request body should be a JSON object with the following properties:`

    name (string, required): 
-------->  `the name of the user`

    email (string, required): 

-------->  `the email address of the user`

    password (string, required): 

-------->  `the password of the user`

    role (string, required): 

-------->  `the role of the user`

### Output of Create a new data 
![create](/functions/assets/addData.png)

    `GET` /api/details/:id
----- >  `Retrieves a single document from the SunilData collection by ID. The :id parameter in the URL should be replaced with the ID of the document you want to retrieve.`

### output of update the data
![update](/functions/assets/update%20the%20data.png)
    `PUT` /api/details/:id
----- >  `Updates a document in the SunilData collection. The :id parameter in the URL should be replaced with the ID of the document you want to update. The request body should be a JSON object with the properties you want to update.`
### output of delete the data
![delete](/functions/assets/delete.png)
    `DELETE` /api/details/:id

----- >  `Deletes a document from the SunilData collection by ID. The :id parameter in the URL should be replaced with the ID of the document you want to delete.`

    exports.app = functions.https.onRequest(app); 

#### Link of the data - http://127.0.0.1:5001/sunilvv-c5aca/us-central1/app

`is used to export your Express app as a Cloud Function.`

------ `Note : When you deploy your Firebase Functions project, Firebase automatically creates an HTTPS endpoint for each function that you've defined. By using functions.https.onRequest, you are telling Firebase to map this endpoint to your Express app.`

    app.listen(port) 
`is used to start the Express app and listen for incoming requests on a specific port. It is commonly used when developing and testing an Express app on a local machine.`

   Note :-  `However, in the context of Firebase Functions, you should not use app.listen(port), because Firebase Functions handles the HTTP requests and the port is automatically assigned by the system. Instead, you should export your app as a Cloud Function using functions.https.onRequest(app) as we saw earlier.`


----- > After creating REST API `that api can we use for retrive the data for FRONTEND` by that API url link , it will works when the port server running.....


`The above code is a JavaScript client-side code that sends a POST request to a server using the Fetch API. The server is located at` http://127.0.0.1:5001/sunilvv-c5aca/us-central1/app `and it expects the data in JSON format.`


## Client-side code for Adding Data to Server
This is the JavaScript code that runs on the client-side and sends a POST request to a server to add new data. The server is expected to be located at http://127.0.0.1:5001/sunilvv-c5aca/us-central1/app and should accept data in JSON format.
 ### output the addData
 ![create](/functions/assets/addData.png)

    `url`: the URL of the server that will receive the data

`METHOD` 

    `POST` : -  `This method is used to create a new user.

`Path` - ${url}/api/details/addData

----- >  `Adds a new document to the `SunilData` collection. 
The request body should be a JSON object with the following properties:`

    `Uname`: the input element that contains the name data
    `email`: the input element that contains the email data
    `password`: the input element that contains the password data
    `mySelect`: the select element that contains the role data

Here, I'm store the user entered data via form and it hold an object type in `data` variable..

than I'm try to fetch the API url link based on the `post` path (api/details/addData) and the below things it will be do...
### `Functionality`
Step - 1 : The code snippet is performing a POST request to the specified URL ${url}/api/details/addData using the Fetch API in JavaScript.

Step -2 : The request contains an object data which is passed to the server as JSON data in the request body. The object contains four key-value pairs, name, email, password, and role, with their values obtained from the respective form input fields with ids 'nameUser', 'userName', 'password', and 'mySelect'.

Srep - 3 : The request is sent with the HTTP method POST, and the headers specify that the content type is application/json. The request body is converted to a JSON string using JSON.stringify().

The response from the server is stored in the res variable, which is then parsed as JSON using res.json() to extract the response body. The parsed JSON object is then logged to the console.

` The above functionality do in the ` addData.js` file....`

-----
-----

### Here is the Breakdown Functionality of the recive.js for retrive the data from server via nodejs API...

    Global Variables: 
`The code initializes some global variables such as the API endpoint URL, a variable to store the data obtained from the server, and a modal element for editing user data.`

    GET DATA: 
`The code sends an HTTP GET request to the /api/details endpoint of the Firebase Cloud Function and then receives the response data in JSON format. The code then loops through the received data and dynamically creates HTML table rows to display the data on the web page.`
### output of get the data
![addData](/functions/assets/receive%20data.png)

    Delete DATA: 
`The code defines a function handleToDelete that accepts an id parameter and sends an HTTP DELETE request to the /api/details/:id endpoint of the Firebase Cloud Function to delete the data with the corresponding id.`
### output of Delete the data
![delete](/functions/assets/delete.png)

    Update DATA: 
`The code defines a function handleToEdit that accepts an id parameter and sets the modal element's display style property to "block" to show it. It then sends an HTTP GET request to the /api/details/:id endpoint of the Firebase Cloud Function to retrieve the data with the corresponding id. It populates the form in the modal with the retrieved data and sets the updID variable to the id parameter. The code defines a function uploadNewData that retrieves the updated data from the form and sends an HTTP PUT request to the /api/details/:id endpoint of the Firebase Cloud Function to update the data with the corresponding id. The updID variable is used to identify the data to be updated.`

### output of update the data
![update](/functions/assets/update%20the%20data.png)

Note : - If we want to access that API in other different network we need to activate the firebase upgrade biling account by the `spark` to `pay as you go`....

![billing](/functions/assets/billing.png)
----
### Running Process of the Creating firebase function cloud rest API

Creating a REST API based on Firebase Cloud Functions involves the following steps:

`Set up a Firebase project: If you haven't already, set up a Firebase project on the Firebase console.`

Install Firebase CLI: Firebase CLI is a command-line interface for Firebase that allows you to interact with your Firebase project from your terminal. Install it using npm by running the following command in your terminal:

    npm install -g firebase-tools

Create a new Firebase function: To create a new Firebase function, run the following command in your terminal:

    firebase init functions

This will create a new directory called functions in your project folder.

    Set up Express.js: 
`Express.js is a popular web framework for Node.js that allows you to easily create REST APIs.`

 Install it in your project by running the following command:

    cd functions
    npm install express cors

This will install Express.js and its dependencies in the functions directory.

Define your API routes: Create a new file called index.js in the functions directory. This file will define your API routes.  

`Here's an example:`

    const functions = require('firebase-functions');
    const express = require('express');
    const cors = require('cors');

    const app = express();
    app.use(cors({ origin: true }));

    app.get('/api/data', (req, res) => {
    res.send('Hello from Firebase!');
    });

    exports.app = functions.https.onRequest(app);

This code defines an Express.js app, sets up CORS, defines an API route for GET requests to /api/data, and exports the app as a Firebase Cloud Function.

Deploy your function: To deploy your function, run the following command in your terminal:
bash

    firebase deploy --only functions
This will deploy your function to Firebase Cloud Functions. Once the deployment is complete, you can access your API endpoint at `https://<your-project-id>.firebaseapp.com/api/data.`

That's it! You now have a simple REST API based on Firebase Cloud Functions. You can continue to build on this by adding more routes and logic to your Express.js app.

In simple way ----

we can without using the firebase function cloud------

ANother Way--


To create a Node.js API for Firestore, you'll need to follow these steps:

step-1 : Install the required dependencies:

    npm install --save express firebase-admin
step-2 : Create a new project on the Firebase console.

step-3 : Set up a Firestore database on the Firebase console.

step-4 : Create a new service account key on the Firebase console.

step-5 : Initialize Firebase in your Node.js project by adding the following code to your index.js file:

    const admin = require('firebase-admin');
    const serviceAccount = require('./path/to/serviceAccountKey.json');
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });

`Replace path/to/serviceAccountKey.json with the path to the service account key JSON file you downloaded from the Firebase console.`

step-6 : Create your routes and controllers for your REST API using Express and Firestore methods. Here's an example:

    const express = require('express');
    const app = express();
    const db = admin.firestore();
    app.get('/collection/:name', async (req, res) => {
        const documents = {msg : "data is available" };
        res.send(documents);
    });
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
    });

`This example creates routes for getting all documents from a collection, getting a document by ID, creating a new document, updating a document, and deleting a document. You can customize these routes and add more as needed.`

step-7 : Run the application using node index.js.

`Note: This is a basic example and does not include any error handling or input validation. You should add those to your application to make it more robust and secure.`


That's all...!

Thank you............