import Mybarchart from "@/components/parts/charts/barchart";
import MyLineChart from "@/components/parts/charts/linechart";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ShopPage({
  params
}:
{
  params: any
}) {
  
  return (
    <ScrollArea className="h-full border w-full p-5">
      <div className="grid grid-cols-2 gap-5 w-full h-full">
        <div className="w-full h-full max-h-[400px]">
          <h2 className="text-2xl font-bold text-center my-5">Transuctions</h2>
          <Mybarchart />
        </div>
        <div className="w-full h-full max-h-[400px]">
          <h2 className="text-2xl font-bold text-center my-5">Profit Curve</h2>
          <MyLineChart />
        </div>
      </div>
    </ScrollArea>
  )
}