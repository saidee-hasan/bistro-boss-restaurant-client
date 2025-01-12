import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure';




function useAdmin() {
    const axiosSecure= useAxiosSecure()
    const {user}=useAuth();
    const {data: isAdmin,isPending : isAdminLoading}=useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn:async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
           
           console.log(res.data)
            return res.data?.admin;
        
        
        }


    })
  return [isAdmin,isAdminLoading]
}

export default useAdmin
