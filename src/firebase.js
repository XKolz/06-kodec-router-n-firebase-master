// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe8dXb1ue7SfOZ4FpVvQnt6nUE7MCfxXA",
  authDomain: "enlightenxk.firebaseapp.com",
  projectId: "enlightenxk",
  storageBucket: "enlightenxk.appspot.com",
  messagingSenderId: "861621160605",
  appId: "1:861621160605:web:febe88f0a3636a07cf6274",
  measurementId: "G-PJMP2XK3ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };






// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { GoogleAuthProvider } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyCcnc_uyT7mNKwSSZM3moMz3SZi2IzMb0E',
//   authDomain: 'kodec-router-n-firebase.firebaseapp.com',
//   projectId: 'kodec-router-n-firebase',
//   storageBucket: 'kodec-router-n-firebase.appspot.com',
//   messagingSenderId: '204530175507',
//   appId: '1:204530175507:web:8c8893272a0106990179e6',
//   measurementId: 'G-1MMXHF1HMY',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();

// const provider = new GoogleAuthProvider();

// export { auth, provider };