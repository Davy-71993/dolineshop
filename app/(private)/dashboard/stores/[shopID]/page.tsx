import Mybarchart from "@/components/parts/charts/barchart";
import MyLineChart from "@/components/parts/charts/linechart";
import { InvoicesTable } from "@/components/parts/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function ShopPage({
  params
}:
{
  params: any
}) {
  
  return (
    <ScrollArea className="flex-1 h-[68vh] border w-full p-5 relative">
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold">Products</h2>
        <Link 
          href={`/dashboard/products/create?sid=${params?.shopID}`} 
          className="rounded-full text-white font-bold right-5 px-5 py-3 bg-primary hover:bg-primary/75"
        >
            Add new Product
        </Link>
      </div>
      <InvoicesTable />
      <h2 className="text-2xl font-bold my-5">Weekly recap.</h2>
      <div className="grid md:grid-cols-2 gap-5 w-full h-full">
        <div className="w-full h-full mb-10 md:my-0 max-h-[400px]">
          <h2 className="text-2xl font-bold text-center my-5">Profits</h2>
          <Mybarchart />
        </div>
        <div className="w-full h-full my-10 md:my-0 max-h-[400px]">
          <h2 className="text-2xl font-bold text-center my-5">Transuctions</h2>
          <MyLineChart />
        </div>
      </div>
    </ScrollArea>
  )
}