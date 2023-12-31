import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import '../Login.css';
import Popup from '../Popup/Popup'; 


const Club = () => {
  const [clublist, setClubList] = useState([]);
  const [clubid, setclubid]=useState("");
  const clubCollectionRef = collection(db, 'club');
  
    const getClubList = async () => {
      let filteredData = []; // Declare filteredData with the appropriate scope
      try {
        const data = await getDocs(clubCollectionRef);
        filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setClubList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {

    getClubList();
  }, []);
  return (

   
    <div className='clubfirst'>
       <Popup/>
      {clublist.map((club) => (
        <div>
          <div className=''> 
          <Link to={`/Showclub/${club.id}`}> 
                <h2 onClick={()=> setclubid(club.id)}>{club.name}</h2>
                </Link>
                <small>{club.description}</small>
                
                <span class ="left-container-arrow"></span>
            </div>
         
        </div>
      ))}
       <button className='btn-primary'><Link to = '/createclub'>Create New Club</Link></button> 
    </div>
  )
}



export default Club;
