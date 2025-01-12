import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';


export default function AddItems() {
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    
    
    const formData = new FormData();
    formData.append('image', data.image[0]); 

    try {
      // Send the image upload request to imgBB API
      const res = await axiosPublic.post(image_Hosting_Api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Correct content type for file upload
        },
      });

      // If image upload is successful, proceed with sending the menu item data
      if (res.data.success) {
        // Prepare the menu item object
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseInt(data.price) ,
          recipe: data.recipe, // recipe description from form
          image: res.data.data.url, // URL of the uploaded image from the image hosting service
        };


       
    
       axiosSecure.post('/menu',menuItem)

        console.log(menuItem)



      }
  

    
    } catch (error) {
      console.error('Error uploading image:', error); // Handle any errors in the image upload
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      {/* Section Title */}
      <SectionTitle heading={"Add an item"} subHeading={"What's new"} />

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        
        {/* Recipe Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Recipe Name</span>
          </label>
          <input
            {...register("name", { required: "Recipe name is required" })}
            type="text"
            placeholder="Enter recipe name"
            className="input input-bordered w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Flex container for Category and Price */}
        <div className="flex space-x-6">
          
          {/* Category */}
          <div className="w-full">
            <label className="label">
              <span className="label-text text-lg font-semibold">Category</span>
            </label>
            <select
              defaultValue={"Default"}
              {...register("category", { required: "Category is required" })}
              className="select select-bordered w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option disabled value="Default">
                Choose a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="desert">Desert</option>
              <option value="drink">Drink</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm">{errors.category.message}</span>
            )}
          </div>

          {/* Price */}
          <div className="w-full">
            <label className="label">
              <span className="label-text text-lg font-semibold">Price</span>
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              type="text"
              placeholder="Enter price"
              className="input input-bordered w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">{errors.price.message}</span>
            )}
          </div>
        </div>

        {/* Recipe (Description) */}
        <div>
          <label className="label">
            <span className="label-text text-lg font-semibold">Recipe</span>
          </label>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a description"
          />
        </div>

        {/* File Input */}
        <div>
          <label className="label">
            <span className="label-text text-lg font-semibold">Upload Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            className="file-input file-input-bordered w-full max-w-xs rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.image && (
            <span className="text-red-500 text-sm">{errors.image.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary mt-6 w-full md:w-auto px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
