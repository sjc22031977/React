import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "firebase/firestore";

import { db } from "./firebase";

const PRODUCTS_COLLECTION = "productos";
const productsCollection = collection(db, PRODUCTS_COLLECTION);

export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, PRODUCTS_COLLECTION, id);

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const createProduct = async (product) => {
  return await addDoc(productsCollection, product);
};

export const updateProduct = async (id, product) => {
  const docRef = doc(db, PRODUCTS_COLLECTION, id);

  return await updateDoc(docRef, product);
};

export const deleteProduct = async (id) => {
  const docRef = doc(db, PRODUCTS_COLLECTION, id);

  return await deleteDoc(docRef);
};