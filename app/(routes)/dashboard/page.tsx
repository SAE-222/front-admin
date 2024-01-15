"use client"

import React from 'react';
import SalesTotal from '../../../components/dashboard/salesTotal';
import OrdersTotal from '../../../components/dashboard/ordersTotal';
import ProductsTotal from '../../../components/dashboard/productsTotal';
import RevenueChart from '../../../components/dashboard/revenueChart';
import CustomersTotal from '../../../components/dashboard/customersTotal';
import Statistiques from './statistiques/page';


const Dashboard = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Tableau de bord</h1>

      <div className='gap-2  flex pb-2'>
        <SalesTotal />
        <OrdersTotal />
        <ProductsTotal />
      </div>

      <div>
        <Statistiques />  
      </div>
    </div>
  );
};

export default Dashboard;
