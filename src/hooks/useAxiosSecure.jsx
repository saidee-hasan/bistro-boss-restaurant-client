import axios from 'axios'
import React from 'react'




export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
function useAxiosSecure() {

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
  },function(err){
    
  })

  return axiosSecure;
}

export default useAxiosSecure
