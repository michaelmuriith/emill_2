import { arrayRemove, arrayUnion, collection, onSnapshot, updateDoc, } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";
import { auth } from "../firebaseConfig";

export default function Categories() {
  // const [comment, setComment] = useState("");
  const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   const categoryRef = collection(db, "Categories",);
  //   onSnapshot(categoryRef, (snapshot) => {
  //     setCategories(snapshot.data());
  //   });
  //   console.log(categories)
  // }, []);
  useEffect(() => {
    const categoryRef = collection(db, "Categories",);
    onSnapshot(categoryRef, (snapshot) => {
      const cat = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategories(cat);
      console.log(cat);
    });
  }, []);

  // const handleChangeComment = (e) => {
  //   if (e.key === "Enter") {
  //     updateDoc(commentRef, {
  //       comments: arrayUnion({
  //         user: currentlyLoggedinUser.uid,
  //         userName: currentlyLoggedinUser.displayName,
  //         comment: comment,
  //         createdAt: new Date(),
  //         commentId: uuidv4(),
  //       }),
  //     }).then(() => {
  //       setComment("");
  //     });
  //   }
  // };

  // delete comment function
  // const handleDeleteComment = (comment) => {
  //   console.log(comment);
  //   updateDoc(commentRef, {
  //       comments:arrayRemove(comment),
  //   })
  //   .then((e) => {
  //       console.log(e);
  //   })
  //   .catch((error) => {
  //       console.log(error);
  //   })
  // };
  
  return (
    <div>
      Categories
      <div className="container">
        {categories !== null &&
          categories.map(category => (
            <div key={category._Id}>
              {category.name}
            </div>
          ))}
      </div>
    </div>
  );
}