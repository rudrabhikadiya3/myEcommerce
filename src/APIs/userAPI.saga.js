import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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
              resolve({ payload: "Email varification sent" });
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
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, val.email, val.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          resolve({ payload: "Login succesfully" });
        } else {
          reject({ payload: "Please verify your email" });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        reject(errorCode);
      });
  });
};

export const logoutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        resolve({ payload: "Logout Successfully!" });
      })
      .catch((error) => {
        const errorCode = error.code;
        reject(errorCode);
      });
  });
};

export const GoogleSignupUser = () => {
  return new Promise((resolve, reject) => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve({payload: 'You are successfully with Google'})
      })
      .catch((error) => {
        const errorCode = error.code;
        reject({payload: errorCode})
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
};
