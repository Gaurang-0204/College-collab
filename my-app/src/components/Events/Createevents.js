import React, {useState} from 'react'
import { db } from '../../config/firebase'
import { storage } from '../../config/firebase'
import { addDoc,collection } from 'firebase/firestore'
import {ref,uploadBytes} from 'firebase/storage'
import { v4 } from 'uuid'
const Createevents = () => {
    const [EventId, setEventId] = useState('');
    const [newEventName, setEventName] = useState('');
    const [eventAdmin, seteventAdmin] = useState('');
    const [newdescription, setdescription] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [clubName, setclubName] = useState('');
    const paths = `event/${v4()}-${imageUpload?.name}`; 

    const eventCollectionRef = collection(db, 'events');

    const uploadFile = () => {
        if (imageUpload === null) return;
    
        const imageRef = ref(storage, paths);
    
        return uploadBytes(imageRef, imageUpload).then((snapshot) => {
          console.log('Image uploaded successfully');
        });
      };

      const onSubmitClub = async () => {
        try {
          const docRef = await addDoc(eventCollectionRef, {
            EventId: EventId, // Use camelCase for property names
            name: newEventName,
            admin: eventAdmin,
            description: newdescription,
            image: paths,
            clubname:clubName,
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
        
        value={clubName}
        onChange={(e) => setclubName(e.target.value)}
      />
       <input
        placeholder="event id"
        type='number'
        value={EventId}
        onChange={(e) => setEventId(e.target.value)}
      />
      <input
        placeholder="Event name"
        value={newEventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        placeholder="Event Admin"
        value={eventAdmin}
        onChange={(e) => seteventAdmin(e.target.value)}
      />
      <input
        placeholder="Description "
        value={newdescription}
        onChange={(e) => setdescription(e.target.value)}
      />
      <input type="file" onChange={(event) => setImageUpload(event.target.files[0])} />
    </div>
    <button onClick={onSubmitClub}>Submit Club</button>
  </div>
  )
}

export default Createevents
