import React from 'react'
import Link from 'next/link'

export default function CallButton() {
  return (
    <div>
        <Link href="tel:09214112609">
            <button className='fixed bottom-24 ml-1 p-3 left-0 rounded-full bg-yellow-500 text-slate-50 sm:hidden z-10'>
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6  text-slate-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
               </button></Link>
    </div>
  )
}
