"use client"

import React from 'react';
import SalesTotal from '../../../components/dashboard/salesTotal';
import OrdersTotal from '../../../components/dashboard/ordersTotal';
import ProductsTotal from '../../../components/dashboard/productsTotal';
import RevenueChart from '../../../components/dashboard/revenueChart';


const Dashboard = () => {
  return (
    <div className='px-4'>
      <h1 className="font-bold text-3xl">Tableau de bord</h1>

      <div className='gap-4 pt-4 flex '>
        <SalesTotal />
        <OrdersTotal />
        <ProductsTotal />
      </div>

      <div className='flex bg-gray-100 rounded-lg mt-4'>
          <RevenueChart />
      </div>

      <div className='bg-gray-100 rounded-lg mt-4'>

      </div>
    </div>
  );
};

export default Dashboard;
