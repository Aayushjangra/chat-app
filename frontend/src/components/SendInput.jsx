import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";


const SendInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

   const onSumbitHandler = async (e)=> {
    e.preventDefault();
    try{
      const res = await axios.post(`http://localhost:8080/api/v1/message/send/66bc90cdb6abdd9b38fc3cf7`)
    }catch(error){
      console.log(error);

    }
    alert(message)
   }
  return (
    <form onSubmit={onSumbitHandler} className="px-4 my-3">
      <div className="w-full relative ">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message...."
          className="border text-sm rounded-lg p-3 border-zinc-500 bolck w-full bg-gray-600 text-white"
        />
        <button type="submit" className="absolute flex inset-y-0 end-0 items-center pr-4">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
