import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

function SocialLogin() {
  const {googleSignIn}=useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const login = ()=>{
googleSignIn()
.then(res=>{

  const userInfo ={
    email : res.user?.email,
    name :res.user?.displayName
  }
axiosPublic.post('/users',userInfo)
.then(res=>{
  console.log(res.data)
  navigate('/')
})

})
  }
  return (
    <div>
      <button className='btn w-full'>
      <FaGoogle onClick={login} className='text-orange-500 w-10 h-10'/></button>

    </div>
  )
}

export default SocialLogin
