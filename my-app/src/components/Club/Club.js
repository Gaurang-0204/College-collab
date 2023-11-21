import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import '../Login.css';



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
    <div>
      {clublist.map((club) => (
        <div>
          <div> 
          <Link to={`/Showclub/${club.id}`}> 
                <h2 onClick={()=> setclubid(club.id)}>{club.name}</h2>
                </Link>
                <small>{club.members}</small>
                <p>Hello Everyone, This clubs belongs to dypiu, under yhre inernational branch, for joining this club go here , for more info contact us on mail or given whasts app.</p>
                <span class ="left-container-arrow"></span>
            </div>
           
          
          
          
          
          
        </div>
      ))}
       <button className='btn-club'><Link to = '/createclub'>Create club</Link></button> 
    </div>
  )
}



export default Club;
