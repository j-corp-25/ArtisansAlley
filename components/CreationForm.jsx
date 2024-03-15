'use client'
import { useState, useEffect } from "react"
const CreationForm = () => {
    const [field,setFields] = useState({
       
    })
  return (
    <form>
    <h2 className="text-3xl text-center font-semibold mb-6">
      Add Your Artisan Creation
    </h2>

    {/* <!-- Title --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
        Title
      </label>
      <input type="text" id="title" name="title" className="border rounded w-full py-2 px-3" placeholder="e.g., Handcrafted Wooden Coasters" required />
    </div>

    {/* <!-- Category --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
        Category
      </label>
      <select id="category" name="category" className="border rounded w-full py-2 px-3" required>
        <option value="Home Decor">Home Decor</option>
        <option value="Accessories">Accessories</option>
        {/* <!-- Add more categories as needed --> */}
      </select>
    </div>

    {/* <!-- Description --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
        Description
      </label>
      <textarea id="description" name="description" className="border rounded w-full py-2 px-3" rows="4" placeholder="Describe your creation"></textarea>
    </div>

    {/* <!-- Details: Material, Color, Dimensions --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">
        Details
      </label>
      <input type="text" id="material" name="details.material" className="border rounded w-full py-2 px-3 mb-2" placeholder="Material, e.g., Reclaimed Wood" required />
      <input type="text" id="color" name="details.color" className="border rounded w-full py-2 px-3 mb-2" placeholder="Color, e.g., Natural Wood" required />
      <input type="text" id="dimensions" name="details.dimensions" className="border rounded w-full py-2 px-3" placeholder="Dimensions, e.g., 4-inch diameter, 0.5-inch height" required />
    </div>

    {/* <!-- Tags --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
        Tags (comma-separated)
      </label>
      <input type="text" id="tags" name="tags" className="border rounded w-full py-2 px-3" placeholder="e.g., Handmade, Wood, Durable" />
    </div>

    {/* <!-- Price --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
        Price (USD)
      </label>
      <input type="number" id="price" name="price.amount" className="border rounded w-full py-2 px-3" placeholder="Price" required />
    </div>

    {/* <!-- Artisan Info: Automatically filled if possible --> */}
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-4">Artisan Information</h3>
      <input type="text" id="artisan_name" name="artisan_info.name" className="border rounded w-full py-2 px-3 mb-2" placeholder="Name" value="Tom Green" disabled />
      <input type="email" id="artisan_email" name="artisan_info.email" className="border rounded w-full py-2 px-3 mb-2" placeholder="Email" value="tomsmith@email.com" disabled />
      <input type="text" id="artisan_phone" name="artisan_info.phone" className="border rounded w-full py-2 px-3 mb-2" placeholder="Phone" value="678-901-2345" disabled />
      <input type="text" id="artisan_location" name="artisan_info.location" className="border rounded w-full py-2 px-3" placeholder="Location" value="Seattle, WA" disabled />
    </div>

    {/* <!-- Images --> */}
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="images">
        Images (Select up to 3 images)
      </label>
      <input type="file" id="images" name="images" className="border rounded w-full py-2 px-3" accept="image/*" multiple />
    </div>

    <div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">
        Add Creation
      </button>
    </div>
  </form>
  )
}

export default CreationForm
