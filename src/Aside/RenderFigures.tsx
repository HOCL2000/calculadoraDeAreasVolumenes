// import { data3d } from "@/dataAside"

// const RenderFigures = () => {
//   return (
//     <div className="hidden lg:flex flex-col gap-4">
//     {data3d.map(figure => (
//       <article key={figure.id} className={`flex w-full items-center rounded cursor-pointer transition-all duration-300 ${selectedFigure?.id === figure.id ? "border border-zinc-50 cursor-auto" : "border border-zinc-700 hover:border-zinc-500"} group`} onClick={() => changeSelectedFigure(figure)}>
//         <div className="w-full max-w-[30%] p-1">
//           <figure className="flex items-center justify-center relative">
//             <img src={figure.image} alt={`imagen ${figure.name}`} className="object-cover w-full aspect-square rounded shadow-lg" />
//             <img src={figure.image} alt={`imagen ${figure.name}`} className="absolute contrast-125 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]" />
//           </figure>
//         </div>
//         <main className="flex flex-col w-full px-2">
//           <h2 className="text-zinc-100 text-lg font-semibold">{figure.name}</h2>
//         </main>
//       </article>
//     ))}
//   </div>
//   )
// }

// export default RenderFigures