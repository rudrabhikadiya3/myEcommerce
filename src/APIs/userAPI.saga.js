import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
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
