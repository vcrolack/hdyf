import {
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db, firebaseAuth } from "../config/firebase/firebase";
import { FormState } from "../common/interfaces/form-state.interface";
import { GeneralMood } from "../state/contexts/form.context";
import { Entry } from "../common/interfaces/entry.interface";

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

    const userDocRef = doc(db, collectionName, user.uid);

    await setDoc(userDocRef, { uid: user.uid }, { merge: true });
    const entriesCollectionRef = collection(userDocRef, "entries");

    const docRef = await addDoc(entriesCollectionRef, documentData);
    return docRef;
  } catch (error) {
    console.log("Error adding document", error);
  }
};

export const getEntries = async (
  generalMood: GeneralMood
): Promise<Entry[]> => {
  if (!firebaseAuth.currentUser) throw new Error("User is not authenticated");

  const q = query(
    collection(db, `moodEntries/${firebaseAuth.currentUser.uid}/entries`),
    where("generalMood", "==", generalMood)
  );
  const querySnapshot = await getDocs(q);
  console.log("object");
  const entries = querySnapshot.docs.map((entry) => ({
    id: entry.id,
    ...entry.data(),
  })) as Entry[];

  console.log(entries);
  return entries;
};
