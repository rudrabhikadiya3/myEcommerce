import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const newUser = (val) => {
  console.log(val);
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, val.email, val.spassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendEmailVerification(auth.currentUser).then(() => {
              resolve("Email varification sent");
            });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        reject(errorCode);
      });
  });
};

export const loginUser = (val) => {
  return new Promise((resolve, reject)=>{
    signInWithEmailAndPassword(auth, val.email, val.password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        resolve("Login succesfully");
      } else {
        reject("Please verify your email");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
  })
};
