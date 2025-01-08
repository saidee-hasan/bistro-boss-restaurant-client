import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

function FoodCard({ item }) {
  const { name, image, price, recipe,_id } = item;
  const { user } = useAuth();
  const [,refetch] = useCart();
  const axiosSecure = useAxiosSecure()
const navigate = useNavigate()
  const handleAddToCart = (food) => {
    if (user && user?.email) {
  const cartItems = {
    menuId : _id,
    email: user?.email,
    name,
    image,
    price
  }



      axiosSecure
      .post("/carts", 
       cartItems
      )
      .then(function (response) {

        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        refetch()
      })
      .catch(function (error) {
        console.log(error);
      });

    } else {
   
Swal.fire({
  title: "you Are   not Login",
  text: "Please Login Add to cart!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Login It"
}).then((result) => {
  if (result.isConfirmed) {
   navigate('/login')
  }
});
    }


  };

  return (
    <div className="">
      <div className="card bg-base-100 h-96 shadow-xl transition-transform transform hover:scale-105">
        <figure className="h-48 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-38 rounded-md object-cover"
            onError={(e) => {
              e.target.src = "path/to/fallback-image.jpg";
            }} // Fallback image
          />
          <p className="text-lg font-bold absolute right-0 mr-4 mb-20 bg-white bg-opacity-75 px-2 rounded">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-600">{recipe}</p>{" "}
          {/* Optional: Display recipe or description */}
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline cursor-pointer bg-slate-100  border-cyan-500 border-0 border-b-4 mt-4 hover:bg-cyan-500 hover:text-white transition duration-300 transform hover:scale-105"
              aria-label={`Buy ${name} for $${price}`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
