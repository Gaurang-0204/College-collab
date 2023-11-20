import React  from 'react'
import { getDoc,doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Showclub = () => {
  const [clubData, setClubData] = useState(null);
  const { clubid } = useParams();

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const docref = doc(db, "club", clubid);
        const club = await getDoc(docref);
        setClubData(club.data());
      } catch (error) {
        console.error('Error fetching club data:', error);
      }
    };

    fetchClubData();
  }, []);

  return (
    <div>
      <h1>Club Data</h1>
      {clubData ? (
        <div>
          <p>Name: {clubData.name}</p>
          <p>members: {clubData.members}</p>
          {/* Add more properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Showclub;