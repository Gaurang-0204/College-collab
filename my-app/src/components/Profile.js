import React from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db, storage } from '../config/firebase';
import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';

const Profile = () => {
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "students", userId);
        const club = await getDoc(docRef);
        setUserData(club.data());
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (userData && userData.image) {
      const imageRef = ref(storage, userData.image);
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.error('Error fetching image URL: ', error);
        });
    }
  }, [userData]);

  return (
    <div className='profile-container'>
      {imageUrl && <img src={imageUrl} className='profile-pic' />}
      <div className='profile-details'>
        {userData ? (
          <div>
            <p>Name: {userData.name}</p><br></br>
            <p>D.O.B: 02-04-2003</p><br></br>
            <p>Contact number: 7666142912 </p><br></br>
            <p>Address: srg dfgbs sg</p><br></br>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
