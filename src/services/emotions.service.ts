import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase/firebase";

export const getEmotionsByCategory = async (category: string) => {
  const q = query(collection(db, "mood"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const emotions: string[] = [];

  querySnapshot.forEach((doc) => {
    emotions.push(doc.data().name);
  });
  console.log(emotions);
  return emotions;
};
