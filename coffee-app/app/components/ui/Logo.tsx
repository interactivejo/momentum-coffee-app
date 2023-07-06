'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Logo = () => {
    const router = useRouter()


    return (
        <Link href='/'>
            <Image
            src='/images/logo.svg'
            alt='Momentum Coffee Logo'
            className='cursor-pointer'
            height="100"
            width="100"
        />
        </Link>
        
    )
}

export default Logo