import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db, firebaseAuth } from "../config/firebase/firebase";
import { FormState } from "../common/interfaces/form-state.interface";

export const getEmotionsByCategory = async (category: string) => {
  const q = query(collection(db, "mood"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const emotions: string[] = [];

  querySnapshot.forEach((doc) => {
    emotions.push(doc.data().name);
  });

  return {
    category,
    emotions,
  };
};

export const createNewEntry = async (
  collectionName: string,
  newEntry: FormState
) => {
  try {
    const user = firebaseAuth.currentUser;

    if (!user) throw new Error("User not authenticated");

    const documentData = {
      ...newEntry,
      userId: user.uid,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, collectionName), documentData);
    return docRef;
  } catch (error) {
    console.log("Error adding document", error);
  }
};
