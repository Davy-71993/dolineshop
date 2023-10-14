type Item = {
  
}
const items : Item[] = [
  {}, {}, {}, {}, {} ,{}, {}, {}, {}
]

export default function ShopingPage() {
  return (
    <>
      <div className="w-full h-20 bg-slate-200">
        {/* Search bar goes here */}
      </div>
      <div className="grid gap-10 grid-cols-3 mt-10">
        {
          items.map((it, i) =>(
            <div className="w-full h-60 bg-slate-200 rounded-sm" key={i}></div>
          ))
        }
      </div>
    </>
  )
}