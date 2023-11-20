import React from 'react'
import { db } from '../../config/firebase'
import { addDoc,collection } from 'firebase/firestore'
import { useState } from 'react'

const Createclub = () => {
  const [newclubName, setclubName] = useState("");
  const [newmembers, setmembers] = useState("");
  const clubCollectionRef = collection(db, "club");
  const onSubmitClub = async () => {
    try {
      await addDoc(clubCollectionRef, {
        name: newclubName,
        members: newmembers,
        
      });
      
    } catch (err) {
        console.error(err);
      }
    };
  
  return (
    <div>
      <div>
        <input
          placeholder="Movie title..."
          onChange={(e) => setclubName(e.target.value)}
        />
        <input
          placeholder="Release Date..."
          type="number"
          onChange={(e) => setmembers(Number(e.target.value))}
        />
        </div>
        <button onClick={onSubmitClub}> Submit Movie</button>
      
    </div>
  )
}

export default Createclub;
