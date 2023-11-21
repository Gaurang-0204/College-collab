import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { storage } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const Createclub = () => {
  const [newclubName, setclubName] = useState('');
  const [newmembers, setmembers] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const paths = `club/${v4()}-${imageUpload?.name}`;

  const clubCollectionRef = collection(db, 'club');

  const uploadFile = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, paths);

    return uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log('Image uploaded successfully');
    });
  };

  const onSubmitClub = async () => {
    try {
      const docRef = await addDoc(clubCollectionRef, {
        name: newclubName,
        members: newmembers,
        image: paths,
      });

      console.log('Document written with ID: ', docRef.id);

      await uploadFile();
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="club name"
          value={newclubName}
          onChange={(e) => setclubName(e.target.value)}
        />
        <input
          placeholder="members"
          type="number"
          value={newmembers}
          onChange={(e) => setmembers(e.target.value)}
        />
        <input type="file" onChange={(event) => setImageUpload(event.target.files[0])} />
      </div>
      <button onClick={onSubmitClub}>Submit Club</button>
    </div>
  );
};

export default Createclub;

