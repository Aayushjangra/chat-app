import React from "react";
import OtherUser from "./OtherUser";

import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";


const OtherUsers = () => {
  // my custom hook
  useOtherUsers();
  const {otherUsers} = useSelector(store=>store.user);
  if (!otherUsers) return; // early return in react
   
  return (
      <div className='overflow-auto flex-1'>
          {
              otherUsers?.map((user)=>{
                  return (
                      <OtherUser key={user._id} user={user}/>
                  )
              })
          }
          
      </div>
  )
}

export default OtherUsers
