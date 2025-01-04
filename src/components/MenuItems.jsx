import React from 'react'

function MenuItems({item}) {
    const {image ,name,price,recipe}= item;

  return (
    <div className='flex space-x-4'>
        <img style={{borderRadius:'0 200px 200px 300px'}} className='md:w-40 w-24 ' src={image} alt="" />
        <div className="">
            <h3 className='uppercase'>{name}-------------</h3>
            <p>{recipe}</p>

        </div>
      <p className='text-yellow-500'> ${price}</p>
    </div>
  )
}

export default MenuItems
