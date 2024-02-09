
import Mybarchart from "@/components/parts/charts/barchart";
import MyLineChart from "@/components/parts/charts/linechart";
import { InvoicesTable } from "@/components/parts/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DollarSign, ShoppingBasket, Store } from "lucide-react";



export default async function DashboardPage() {
  return (
    <>
      <div className="space-y-5 flex flex-col flex-1">
        <div className="flex space-x-3">
          <div className="p-5 w-full bg-secondary rounded flex space-x-5">
            <Store size={35} />
            <div>
              <h4>Total stores</h4>
              <p className="text-2xl font-bold">0</p>
              <p className="font-thin line-clamp-1">No stores yet</p>
            </div>
          </div>
          <div className="p-5 w-full bg-secondary rounded flex space-x-3">
            <ShoppingBasket size={35} />
            <div>
              <h4 className="">Products</h4>
              <p className="text-2xl font-bold">0</p>
              <p className="font-thin line-clamp-1">No products yet</p>
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

        <div className='w-full flex-1 p-5 rounded bg-secondary overflow-y-auto'>
          <ScrollArea className="flex-1 h-[68vh] w-full rounded-md border p-4">
            <h4 className="text-2xl">Latest transuctions</h4>
            <InvoicesTable />
            <div className="w-full h-[400px] lg:flex lg:gap-5">
              <div className="h-full w-full mt-10 mb-20">
                <h1 className="text-2xl font-bold text-center my-5">My Line Chart</h1>
                <MyLineChart />
              </div>
              <div className="h-full w-full mt-10">
                <h1 className="text-2xl font-bold text-center my-5">My Bar Chart</h1>
                <Mybarchart />
              </div>
            </div>
          </ScrollArea>
        </div>

      </div>

    </>
  )
}