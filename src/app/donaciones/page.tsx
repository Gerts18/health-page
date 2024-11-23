'use client'

import React from 'react'

import { useRouter } from 'next/navigation';

const PaginaDonaciones = () => {

    
    const router = useRouter();


    return (
        <>
        <div>Pagina de donciones de mike</div>
        
        <button 
        className='border-medium'
        onClick={() => {
            router.push('/pagoDonacion');
        } }
         >Donar</button>

        </>
    )
}

export default PaginaDonaciones