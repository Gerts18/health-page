import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { VscChevronDown } from "react-icons/vsc";

const navbar = () => {
  return (
    <div className="w-full h-28 bg-white shadow-md">
      <div className="flex justify-center items-center pt-2 ml-20 mr-16">
        <Link href={"/"}>
          <div className="flex gap-6 mr-8 w-auto h-full justify-center items-start">
            <Image src="/assets/logo.png" alt="logo" className="w-full h-full" width={750} height={450}/>
          </div>
        </Link>

        <div className="flex gap-6 p-6 w-full h-full justify-center items-center">
          <Link href={""} className="flex">
            <p className="text-2xl text-[#6A6A6A] font-medium">Nosotros</p>
            {/* <VscChevronDown className="text-2xl text-[#6A6A6A]"/> */}
          </Link>
          <Link href={""}>
            <p className="text-2xl text-[#6A6A6A] font-medium">
              Investigaciones
            </p>
          </Link>
          <Link href={""}>
            <p className="text-2xl text-[#6A6A6A] font-medium">Educación</p>
          </Link>
          <Link href={""}>
            <p className="text-2xl text-[#6A6A6A] font-medium">Médicos</p>
          </Link>
          <Link href={""}>
            <p className="text-2xl text-[#6A6A6A] font-medium">Noticias</p>
          </Link>
        </div>

        <div className="flex gap-6 p-6 w-full h-full justify-center items-end">
          <button
            className="bg-[#A0B8FF] hover:bg-[#6a85d9] text-white text-lg px-4 py-1 rounded-full w-32 h-10
          transition duration-100 ease-in-out"
          >
            Log in
          </button>
          <Link href={"/register"}> <button
            className="bg-transparent hover:bg-[#EB356E] border-2 border-[#EB356E] text-lg px-4 py-1 rounded-full w-32 h-10
          text-[#EB356E] hover:text-white transition duration-100 ease-in-out">
            Sign up
          </button> </Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;
