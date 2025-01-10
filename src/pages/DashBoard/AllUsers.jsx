import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure, { axiosSecure } from '../../hooks/useAxiosSecure'
import { FaDeleteLeft, FaFaceRollingEyes, FaTrash } from 'react-icons/fa6'
import { FaUser, FaUsers } from 'react-icons/fa'
import Swal from 'sweetalert2'


function AllUsers() {
  // token and axios interceptor
const axiosSecure = useAxiosSecure()
    const {data:users =[],refetch} = useQuery({
        queryKey:['users'],
        queryFn : async ()=>{
            const res =await axiosSecure.get('/users',);
             return res.data
            //  token and axios interceptor
        }


        
    })

    const handleDeleteUser=(user )=>{
        refetch()
 Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
      axiosSecure.delete(`/users/${user._id}`)
      .then(res =>{
        if(res.data.deletedCount > 0){

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch()
        }
      })
    }
  });
    }


    const handleMakeAdmin = user=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
  .then(res=>{
    if(res.data.modifiedCount > 0){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an Admin Now`,
            showConfirmButton: false,
            timer: 1500
          });
    }
  })


    }

  return (
    <div className=''>
        <div className="flex justify-between">
      <h3>All Users</h3>
      <h3>Total Users {users.length}</h3></div>
    
    {
        users.map((item,idx)=>(

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
      
        <th>{idx+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
        {
            item.role === 'admin'? 'Admin':  <button><FaUsers onClick={()=>handleMakeAdmin(item)}  className='w-8 cursor-pointer bg-orange-500 p-1 rounded-sm text-white h-8'/></button>
        }</td>
      
        <td onClick={()=>handleDeleteUser(item)}><FaTrash  className='w-8 cursor-pointer h-8 text-red-500'/></td>
      </tr>
     
    </tbody>
  </table>
</div>
        ))
    }
    </div>
  )
}

export default AllUsers
