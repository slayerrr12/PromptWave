
"use client"



import Typewriter from 'typewriter-effect';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {
    return (
        <nav className='flex=between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-right'>


                <Image src='/assets/images/logo.svg' width={30} height={30} alt='logo' />
                <p className='logo_text'>

                    <Typewriter
                        options={{
                            strings: ['PromptWave','Find Awesome Fonts'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></p>
            </Link>








        </nav>
    )
}

export default Nav
