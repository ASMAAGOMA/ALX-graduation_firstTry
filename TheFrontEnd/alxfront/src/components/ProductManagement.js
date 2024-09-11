import React, { useState } from 'react';
import { useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } from '../features/products/productsApiSlice';

const ProductManagement = ({ products }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', description: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const [addNewProduct] = useAddNewProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newProduct).forEach(key => formData.append(key, newProduct[key]));
    if (selectedFile) formData.append('image', selectedFile);
    
    try {
      await addNewProduct(formData).unwrap();
      setNewProduct({ name: '', price: '', category: '', description: '' });
      setSelectedFile(null);
    } catch (err) {
      console.error('Failed to create the product:', err);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await updateProduct({ id, ...updatedData }).unwrap();
    } catch (err) {
      console.error('Failed to update the product:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id).unwrap();
    } catch (err) {
      console.error('Failed to delete the product:', err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
        <input 
          name="name" 
          value={newProduct.name} 
          onChange={handleInputChange} 
          placeholder="Product Name" 
          required 
          className="block w-full p-2 mb-2 border rounded"
        />
        <input 
          name="price" 
          type="number" 
          value={newProduct.price} 
          onChange={handleInputChange} 
          placeholder="Price" 
          required 
          className="block w-full p-2 mb-2 border rounded"
        />
        <input 
          name="category" 
          value={newProduct.category} 
          onChange={handleInputChange} 
          placeholder="Category" 
          required 
          className="block w-full p-2 mb-2 border rounded"
        />
        <textarea 
          name="description" 
          value={newProduct.description} 
          onChange={handleInputChange} 
          placeholder="Description" 
          className="block w-full p-2 mb-2 border rounded"
        />
        <input 
          type="file" 
          onChange={handleFileChange} 
          required 
          className="block w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Product</button>
      </form>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Product List</h3>
        <ul className="space-y-4">
          {products?.ids?.map(productId => {
            const product = products.entities[productId];
            return (
              <li key={productId} className="border-b pb-4">
                <h4 className="font-bold">{product.name}</h4>
                <p className="text-gray-600">${product.price} - {product.category}</p>
                <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleUpdate(productId, { ...product, price: parseFloat(product.price) + 1 })}
                    className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                  >
                    Increase Price
                  </button>
                  <button 
                    onClick={() => handleDelete(productId)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;