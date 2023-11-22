import React, { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../config/firebase';
import { useParams } from 'react-router-dom';
import { ref, getDownloadURL } from 'firebase/storage';
import '../Login.css'

const Showclub = () => {
  const { clubid } = useParams();
  const [clubData, setClubData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const docRef = doc(db, "club", clubid);
        const club = await getDoc(docRef);
        setClubData(club.data());
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    };

    fetchClubData();
  }, [clubid]);

  useEffect(() => {
    if (clubData && clubData.image) {
      const imageRef = ref(storage, clubData.image);
      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          console.error('Error fetching image URL: ', error);
        });
    }
  }, [clubData]);

  return (
    <div>
      <h1>Club Data</h1>
      {clubData ? (
        <div>
          <p>Name: {clubData.name}</p>
          <p>Description: {clubData.description}</p>
          {imageUrl && <img src={imageUrl} className='clubimg'/>}
          {/* Add more properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Showclub;
