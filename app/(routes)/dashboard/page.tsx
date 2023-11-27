import React from 'react';
import SalesTotal from '../../../components/dashboard/salesTotal';
import OrdersTotal from '../../../components/dashboard/ordersTotal';
import ProductsTotal from '../../../components/dashboard/productsTotal';
import RevenueChart from '../../../components/dashboard/revenueChart';
import CustomersTotal from '../../../components/dashboard/customersTotal';


const Dashboard = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Tableau de bord</h1>

      <div className='gap-14' style={{ display: 'flex'}}>
        <SalesTotal />
        <OrdersTotal />
        <ProductsTotal />
      </div>

      <h2 className='font-semibold'>Revenu total</h2>
      <div className='pt-8 flex'>
        <RevenueChart />
        <CustomersTotal />
      </div>
    </div>
  );
};

export default Dashboard;
