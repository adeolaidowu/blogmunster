import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: "https://blogmunster.firebaseio.com",
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
// database.ref("users").push({
//   name: "Adeola Idowu",
//   age: 30,
//   isSingle: true,
//   location: {
//     city: "Lagos",
//     country: "NIgeria",
//   },
// });

// database.ref("users").push({
//   name: "Jon Snow",
//   age: 35,
//   isSingle: false,
//   location: {
//     city: "WinterFell",
//     country: "The North",
//   },
// });
// database.ref("users").push({
//   name: "Zaraki Kenpachi",
//   age: 33,
//   isSingle: true,
//   location: {
//     city: "Soul society",
//     country: "Bleach",
//   },
// });

// database.ref("users").on("value", (snapshot) => {
//   const data = [];
//   snapshot.forEach((childSnapshot) => {
//     data.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(data);
// });

// database.ref().set({
//   name: "Adeola Idowu",
//   age: 30,
//   isSingle: true,
//   location: {
//     city: "Lagos",
//     country: "NIgeria",
//   },
// });

// database.ref().remove();

// database.ref().update({
//   isSingle: false,
//   "location/city": "Port Harcourt",
// });

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   })
//   .catch((e) => console.log("Error reading data", e));
