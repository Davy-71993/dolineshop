import Image from "next/image";
import Link from "next/link";

export default function ShopCard() {
  return (
    <Link href={`/dashboard/stores/yyuohup9`} className="border w-full col-span-1 bg-secondary p-5 rounded">
        <h2 className="rounded p-5 text-center font-bold text-lg w-2/3 mx-auto bg-primary-foreground">Davy Unique Smart Phones</h2>

        <Image
            className="text-primary-foreground mx-auto my-5" 
            src={'/images/gfgh.png'} alt="Davy Unique Smart Phones" 
            height={100} width={100} />
        <p className="text-center text-2xl">12 Items</p>
        <p className="text-center text-2xl">8 sold</p>
        
    </Link>
  )
}