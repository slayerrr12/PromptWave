"use client";

import Typewriter from "typewriter-effect";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
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
        <nav className=" min-w-full flex justify-between items-center py-4 px-6">
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
                            <Link href="/createpost">
                                <button
                                    
                                    on
                                    
                                    class="relative inline-block px-4 py-2 font-medium group"
                                >
                                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                    <span class="relative text-black group-hover:text-white">
                                        Create Post
                                    </span>
                                </button>
                            </Link>

                            <a
                                href="#_"
                                on
                                onClick={signOut}
                                class="relative inline-block px-4 py-2 font-medium group"
                            >
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span class="relative text-black group-hover:text-white">
                                    Sign Out
                                </span>
                            </a>

                            <Link href="/profile">
                                <Image
                                    src="/assets/images/profile.jpg"
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
