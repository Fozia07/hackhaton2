import Image from 'next/image';
import React from 'react'
import pic1 from '@/app/public/fixed-height.png';
import pic2 from '@/app/public/fixed-height (1).png';
import pic3 from '@/app/public/fixed-height (2).png';
import pic4 from '@/app/public/fixed-height (3).png';
import pic5 from '@/app/public/fixed-height (4).png';
import pic6 from '@/app/public/fixed-height (5).png';
import pic7 from '@/app/public/fixed-height (7).png';
import pic8 from '@/app/public/fixed-height (8).png';
import Link from 'next/link';

function List(){
  return (
    <div className='max-w-screen-2xl lg:h-[1200px] mt-5 px-8 mx-auto  '>
      <div className='w-full'>
        <div className=' h-40 lg:max-w-2xl px-20 py-32 text-center'>
           <h1 className="montserrat-700 text-2xl  "> Featured Products</h1>
           <h1 className='montserrat-700 text-2xl font-bold'>BESTSELLER PRODUCTS</h1>
           <p></p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 mt-20'>
        <div className="px-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden translate-x-1">
          <Image alt="ecommerce" src={pic1}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic2}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg ">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic3}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic4}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic5}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic6}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic7}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>
      <div className="p-4 w-full bg-slate-100 shadow-lg">
        <Link href="/product" className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" src={pic8}></Image>
        </Link>
        <div className="mt-4">
        <h3 className="text-black text-sm montserrat-700 font-semibold ">Graphic Design</h3>
        <h2 className="text-slate-600 title-font text-lg montserrat-400 font-medium">English Department</h2>
          <p className="mt-1 text-slate-500 opacity-">$16.00<span className='text-green-600 '>$6.48</span></p>
        </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default List;