import  { useEffect } from 'react';
import {useDispatch} from "react-redux"
import axios from 'axios';
import { setOtherUsers } from '../redux/userSlice';

const useOtherUsers = () => {
    const dispatch = useDispatch();


  useEffect(()=> {
    const fetchOtherUsers = async()=> {
        try{
                axios.defaults.withCredentials = true;
               const res = await axios.get('http://localhost:8080/api/v1/user/');
            
               //store
               dispatch(setOtherUsers(res.data));
        }catch(error){
          console.log(error);
        }
    }
    fetchOtherUsers();
  },[])
}

export default useOtherUsers