import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';

function AllUsers() {
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [], refetch, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  });

  // Delete user
  const handleDeleteUser = (user) => {
    refetch();
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
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The user has been deleted.",
                icon: "success"
              });
              refetch();
            }
          }).catch(error => {
            Swal.fire({
              title: "Error",
              text: "There was an issue deleting the user.",
              icon: "error"
            });
          });
      }
    });
  };

  // Make user an admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is now an Admin`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }).catch(error => {
        Swal.fire({
          title: "Error",
          text: "There was an issue promoting the user to admin.",
          icon: "error"
        });
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  // Separate admin and regular users
  const adminUsers = users.filter(user => user.role === 'admin');
  const regularUsers = users.filter(user => user.role !== 'admin');

  return (
    <div className="container">
      <div className="flex justify-between mb-4">
        <h3>All Users</h3>
        <h3>Total Users: {users.length}</h3>
      </div>

      {/* Admin Users Section */}
      <div className="mb-6">
        <h4 className="font-bold text-xl mb-2">Admin Users</h4>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <FaTrash
                      onClick={() => handleDeleteUser(item)}
                      className="w-8 h-8 text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regular Users Section */}
      <div>
        <h4 className="font-bold text-xl mb-2">Regular Users</h4>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {regularUsers.map((item, idx) => (
                <tr key={item._id}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(item)}
                      className="w-8 cursor-pointer bg-orange-500 p-1 rounded-sm text-white h-8"
                    >
                      <FaUsers />
                    </button>
                  </td>
                  <td>
                    <FaTrash
                      onClick={() => handleDeleteUser(item)}
                      className="w-8 h-8 text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
