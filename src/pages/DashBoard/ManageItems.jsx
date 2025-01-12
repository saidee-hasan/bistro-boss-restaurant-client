import React, { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import { FaTrash, FaEdit, FaTh, FaTable } from 'react-icons/fa'; // Importing React Icons

function ManageItems() {
  const [menu] = useMenu(); // Assuming `useMenu` returns an array of menu items
  const [isTableView, setIsTableView] = useState(true); // State to toggle between table and card view

  // Toggle view function
  const toggleView = () => {
    setIsTableView(!isTableView);
  };

  return (
    <div>
      {/* Button to toggle between card and table views */}
      <div className="text-center mb-4">
        <button
          onClick={toggleView}
          className="btn  w-full flex items-center gap-2"
        >
          {/* Add Icon with Text */}
          {isTableView ? (
            <>
              <FaTh /> {/* Grid Icon for Card View */}
              Switch to Card View
            </>
          ) : (
            <>
              <FaTable /> {/* Table Icon for Table View */}
              Switch to Table View
            </>
          )}
        </button>
      </div>

      {/* Conditionally render table or card layout */}
      {isTableView ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Header */}
            <thead>
              <tr>
                <th></th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the menu items */}
              {menu && menu.length > 0 ? (
                menu.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          <div className="text-sm opacity-50">{item.category}</div>
                        </div>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button className="btn btn-ghost btn-xs">
                        <FaEdit /> Update
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-ghost btn-xs text-red-500">
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No menu items found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 p-10 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map through the menu items in card view */}
          {menu && menu.length > 0 ? (
            menu.map((item) => (
              <div key={item._id} className="card bg-white shadow-xl rounded-lg overflow-hidden">
                <figure>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="p-4">
                  <div className="font-bold text-lg">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.category}</div>
                  <div className="text-xl font-semibold mt-2">${item.price}</div>
                  <div className="flex justify-between mt-4">
                    <button className="btn btn-ghost btn-xs">
                      <FaEdit /> Update
                    </button>
                    <button className="btn btn-ghost btn-xs text-red-500">
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">No menu items found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ManageItems;
