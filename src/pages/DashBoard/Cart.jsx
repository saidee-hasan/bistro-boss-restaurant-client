import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; // Assuming you have FaTrashAlt imported
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import { Axe } from 'lucide-react';
import useAxiosSecure, { axiosSecure } from '../../hooks/useAxiosSecure';

function Cart() {
  const [cart, refetch] = useCart();
const axiosSecure = useAxiosSecure()
  // Calculate total price considering quantity
  const totalPrice = cart.reduce((total, item) => total + item.price + 40 / 100, 0);

  // Function to handle removing an item from the cart
  const handleRemoveItem = (id) => {
   console.log(id)
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
    
      axiosSecure.delete(`/carts/${id}`)
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
  };

  return (
    <div>
      <div className="flex justify-between bg-slate-200 py-4 p-2">
        <h2 className="text-2xl">Items: {cart.length}</h2>
        <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item.id}>
                <td>{idx + 1}</td> {/* Item index */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-lg"
                    onClick={() => handleRemoveItem(item._id)} // Remove item on click
                  >
                    <FaTrashAlt className='text-orange-600' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          {/* Table Footer (Optional) */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
