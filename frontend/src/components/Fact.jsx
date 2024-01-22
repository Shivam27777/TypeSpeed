import { useState } from "react";
import factsList from "../assets/factList"

export default function Fact() {
    const [fact, setFact] = useState(factsList[0]);

    function getRandomFact() {
        const randomIndex = Math.floor(Math.random() * factsList.length);
        setFact(factsList[randomIndex]);
      }

  return (
    <>
    <div className="flex items-center text-wrap  flex-col">
    
<blockquote className="px-5 text-xl italic font-semibold text-gray-900 dark:text-white min-w-214 max-w-220">
    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p>{fact}</p>
</blockquote>
<div onClick={()=>getRandomFact()} className="sticky px-5 mx-2 bg-slate-300 box-border h-16 object-bottom flex items-center rounded-lg group border-2 border-gray-300 p-4 transition-all duration-300 hover:border-blue-500">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</div>



    </div>
    </>
  )
}
