import { DollarSign, ListOrdered, ShoppingBasket } from "lucide-react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    params: any
}

export default function ShopPage({children, params}:Props) {
    
  return (
    <div className="space-y-5 flex flex-col flex-1">
      <div className="flex space-x-3">
          <div className="p-5 w-full bg-secondary rounded flex space-x-3">
            <ShoppingBasket size={35} />
            <div>
              <h4 className="">Products</h4>
              <p className="text-2xl font-bold">0</p>
              <p className="font-thin line-clamp-1">No products yet</p>
            </div>
          </div>
          <div className="p-5 w-full bg-secondary rounded flex space-x-5">
            <ListOrdered size={35} />
            <div>
              <h4>Orders</h4>
              <p className="text-2xl font-bold">0</p>
              <p className="font-thin line-clamp-1">No pending orders</p>
            </div>
          </div>
          <div className="p-5 w-full bg-secondary rounded flex space-x-3">
            <DollarSign size={35} />
            <div>
              <h4 className="">Transuctions</h4>
              <p className="text-2xl font-bold flex items-center"><DollarSign size={15} />0.00</p>
              <p className="font-thin line-clamp-1">No transuctions yet</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-secondary">
            { children }
        </div>
    </div>
  )
}