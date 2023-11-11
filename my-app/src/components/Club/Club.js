import React, { useEffect, useState } from 'react'
import { db  } from "../../config/firebase";
import { collection, getDocs } from 'firebase/firestore';

const Club = () => {
  const[clublist, setclublist]=useState([]);
  const clubcollectionref = collection(db,"clubs");

  useEffect(()=> {
    const getclublist= async () =>{
      try{
        const data =await getDocs(clubcollectionref);
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
        id: doc.id,
      }));
      setclublist(filteredData);
      }catch(err){
        console.error(err)
      }
    };
    getclublist();
  },[clubcollectionref]);

  return (
    <div>
      {clublist.map((club)=>( 
        <div> 
          { <h1>{club.Name}</h1> }
          <p>Id: {club.Clubid}</p>/
        </div>

      ))}
      <p></p>
      
    </div>
  )
}

export default Club;

