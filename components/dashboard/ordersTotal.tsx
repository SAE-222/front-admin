import { ShoppingCartIcon } from "@heroicons/react/outline";

const OrdersTotal = () => {
  const totalOrders = 47;

  return (
    <div className="bg-gray-100 rounded-lg px-4 py-4 flex items-center">
      <div className="mr-4">
        <ShoppingCartIcon className="w-16 h-16 text-white bg-green-400 rounded-full p-2" />
      </div>

      <div>
        <h2 className="">Total de commandes (mensuel)</h2>
        <p className="font-semibold">{totalOrders}</p>
      </div>
    </div>
  );
};

export default OrdersTotal;
