import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-react";

export default function ShopSkelton() {
  return (
    <Skeleton className="border col-span-1 row-span-1 p-5 rounded">
       <Skeleton className="rounded p-5 w-2/3 mx-auto bg-primary-foreground"/>
       <ShoppingBag className="text-primary-foreground mx-auto my-5" size={200}/>
    </Skeleton>
  )
}