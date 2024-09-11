import React from 'react';
import { useGetProductsQuery } from '../features/products/productsApiSlice';
import ProductManagement from './ProductManagement';

const AdminDashboard = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  const getTotalProducts = () => products?.ids?.length || 0;
  const getTotalCategories = () => new Set(Object.values(products?.entities || {}).map(p => p.category)).size;
  const getAveragePrice = () => {
    const prices = Object.values(products?.entities || {}).map(p => parseFloat(p.price));
    return prices.length ? (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2) : 0;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.toString()}</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-8 text-gray-600">Welcome to the admin dashboard. Here you can manage products and view key metrics.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <MetricCard title="Total Products" value={getTotalProducts()} />
        <MetricCard title="Total Categories" value={getTotalCategories()} />
        <MetricCard title="Average Price" value={`$${getAveragePrice()}`} />
      </div>

      <ProductManagement products={products} />
    </div>
  );
};

const MetricCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default AdminDashboard;