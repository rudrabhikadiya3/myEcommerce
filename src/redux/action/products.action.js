import * as ActionType from "../ActionTypes";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getStorage,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export const readProductsAction = () => async (dispatch) => {
  try {
    let data = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    dispatch({ type: ActionType.READ_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addProductsAction = (val) => async (dispatch) => {
  try {
    const randomNum = Math.floor(Math.random() * 100000).toString();
    const imgRef = ref(storage, `products/${randomNum}`);

    uploadBytes(imgRef, val.img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        const docRef = await addDoc(
          collection(db, "products"),

          {
            ...val,
            img: url,
            fileName: randomNum,
          }
        );
        dispatch({
          type: ActionType.ADD_PRODUCT,
          payload: { id: docRef.id, ...val, img: url, fileName: randomNum, },
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductAction = (val) => async (dispatch) => {
  try {
    const imgRef = ref(storage, `products/${val.fileName}`);

    deleteObject(imgRef)
      .then(async () => {
        await deleteDoc(doc(db, "products", val.id));
        dispatch({ type: ActionType.DELETE_PRODUCTS, payload: val.id });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const editProductAction = (val) => async (dispatch) => {
  try {
    const productRef = doc(db, "products", val.id);

    await updateDoc(productRef, {
      sprice: val.sprice,
      catagory: val.catagory,
      kwords: val.kwords,
      pname: val.pname,
      stock: val.stock,
      mrp: val.mrp,
      brand: val.brand,
    });
    dispatch({ type: ActionType.EDIT_PRODUCTS, payload: val });
  } catch (error) {
    console.log(error);
  }
};
