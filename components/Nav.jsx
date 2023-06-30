'use client'
import Typewriter from "typewriter-effect";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Nav = () => {
    
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);
    

    return (
        <nav className="min-w-full flex justify-between items-center py-4 px-6">
            <div className="flex-initial">
                <Link href="/" className="flex items-center gap-x-5">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                    <p className="logo_text">
                        <Typewriter
                            options={{
                                strings: ["PromptWave", "Find Awesome Prompts"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </Link>
            </div>

            <div className="flex-auto"></div>

            <div className="flex-initial">
                <div className="flex gap-3 md:gap-5 items-center">
                    {session?.user ? (
                        <>
                            <Link href='/create-prompt' className='black_btn'>
                                Create Post
                            </Link>

                            <button type='button' onClick={signOut} className='outline_btn'>
                                Sign Out
                            </button>

                            <Link href="/profile">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="profile"
                                />
                            </Link>
                        </>
                    ) : (
                        <>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                        type="button"
                                        key={provider.name}
                                        onClick={() => {
                                            signIn(provider.id);
                                        }}
                                        className="black_btn"
                                    >
                                        Sign in
                                    </button>
                                ))}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default dynamic(() => Promise.resolve(Nav), { ssr: false });
