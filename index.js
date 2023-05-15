// ? import Module-----------------

const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
var express = require('express')
var cors = require('cors')
const app = express();
app.use(cors({origin : true}));
app.use(express.json());

// ? import Module-----------------

const db = admin.firestore(); // Global variable for ref od the firestore database  



//^ Read the Data--------------

app.get("/api/details", (req, res) => {
   db.collection("SunilData").get().then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
         users.push({ id: doc.id, ...doc.data() });
      });
      res.json(users);
   })
      .catch(error => {
         console.error(error);
      })
});

//^ Read the Data--------------

//^ Add new Data--------------

app.post('/api/details/addData', async (req, res) => {
   try {
      // Validate the data in the request
      const { name, email, password, role } = req.body;
      if (!name || !email || !password || !role) {
         throw new Error('Missing required fields');
      }
      const docRef = await db.collection('SunilData').add({
         name,
         email,
         password,
         role
      });
      res.json(req.body);
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
});

//^ Add new Data--------------

//^ get id path Data--------------

app.get('/api/details/:id', async (req, res)=>{
   try {
      const { id } = req.params;
      const docRef = await db.collection('SunilData').doc(id).get();
      if (!docRef.exists) {
         throw new Error('Document not found');
      }
      const data = docRef.data();
      res.json({ id, ...data });
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
})

//^ get id path Data--------------

//^ Delete the Data--------------

app.delete('/api/details/:id', async (req, res) => {
   try {
      const { id } = req.params;
      await db.collection('SunilData').doc(id).delete();
      res.json({ id , msg : "data was Deleted"});
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
});

//^ Delete the Data--------------

//^ Update the Data--------------

app.put('/api/details/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const updatedData = req.body;
      await db.collection('SunilData').doc(id).update(updatedData);
      res.json({ id , msg : "Update Successfully!" });
   } catch (err) {
      res.status(400).json({ error: err.message });
   }
});

//^ Update the Data--------------

exports.app = functions.https.onRequest(app);

// createdAt: admin.firestore.FieldValue.serverTimestamp()
