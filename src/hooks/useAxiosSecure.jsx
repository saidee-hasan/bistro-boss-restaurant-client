import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth';




export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
function useAxiosSecure() {
  const navigate = useNavigate();
  const { signOutUser}=useAuth()

  axiosSecure.interceptors.request.use(function(config){
    const token =localStorage.getItem('access-Token')
  console.log(token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },function(error){
    return Promise.reject(error)
  })


  axiosSecure.interceptors.response.use(function(response){
    return response;
  }, async  function(err){
    const status = err.response.status;
    console.log('status error ',status)
 if(status ===401 || status === 403){
  await signOutUser();
navigate('/login')

 }

    return Promise.reject(err)
  })

  return axiosSecure;
}

export default useAxiosSecure
