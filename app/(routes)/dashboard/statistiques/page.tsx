"use client"
import React from 'react';

import RevenueChartMensuel from "../../../../components/dashboard/mensuel/revenueChart";
import CustomersTotalMensuel from "../../../../components/dashboard/mensuel/customersTotal";
import PieChartMensuel from "../../../../components/dashboard/mensuel/piechart";
import BestCustomerMensuel from "../../../../components/dashboard/mensuel/bestCustomer";
import TotalCommandeMensuel from "../../../../components/dashboard/mensuel/totalCommande";


import RevenueChart from '../../../../components/dashboard/revenueChart';
import CustomersTotal from '../../../../components/dashboard/customersTotal';
import PieChart from "../../../../components/dashboard/charts/piechart";
import BestCustomer from "../../../../components/dashboard/bestCustomer";
import TotalCommande from "../../../../components/dashboard/charts/totalCommande"

const Statistiques = () => {
    return (
      <div className='overflow-x-auto h-[830px]'>
        <h1 className="font-bold text-3xl">Statistiques</h1>
        <div className='pb-2'>
          <div className='bg-gray-100 p-2 rounded-md'>
            <h1 className="font-bold text-xl">Mensuel</h1>
              <div className='flex gap-2'>
                <CustomersTotalMensuel />
                <BestCustomerMensuel />
              </div>
              <div className='flex h-[400px] pt-2 gap-2'>
                <PieChartMensuel />
                <RevenueChartMensuel />
                <TotalCommandeMensuel />
              </div>
          </div>
        </div>

        <div className='bg-gray-100 p-2 rounded-md'>
          <h1 className="font-bold text-xl">Annuel</h1>
              <div className='flex gap-2'>
                <CustomersTotal />
                <BestCustomer />
              </div>
              <div className='flex h-[400px] pt-2 gap-2'>
                <PieChart />
                <RevenueChart />
                <TotalCommande />
              </div>
        </div>
        

      </div>
    )
  }
  
  export default Statistiques;