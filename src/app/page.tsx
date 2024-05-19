"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react';


export default function () {
    useEffect(() => {

        let typing = document.getElementById('typing');
        if (!typing) return;

        const text = ['|', ' '];
        let i = 0;

        const interval2 = setInterval(() => {
            typing.innerText = text[i];
            i = (i + 1) % text.length;
        }, 500);
        return () => {
            clearInterval(interval2);
        };
    });

    return (
        <>
            <div className="w-full h-screen grid grid-cols-1 justify-center place-items-center justify-center px-2 md:px-6 lg:px-8">
                <div className="w-full h-full flex flex-col justify-center items-center text-center">
                    <span className="font-bold text-xl">JeanUI</span>
                    <Link href="https://github.com/JeanVydes/jeanui" className="pl-2 text-neutral-500 text-sm underline hover:cursor-pointer">GitHub</Link>
                </div>
                <div className="w-full flex flex-col justify-center space-y-8 text-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center text-md">
                        <div className="w-full flex flex-col space-y-2 shadow-md shadow-amber-700 px-8 py-2 rounded-2xl h-min">
                            <span className="py-4 font-bold text-lg text-center">B A S I C</span>
                            <div className="flex flex-col pb-6 text-md">
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/basic/buttons"><button className="px-1 rounded-lg text-neutral-200 bg-amber-700">buttons</button></Link>
                                <Link className="hover:underline hover:cursor-pointer blur-[4px] backdrop-blur-md" href="/preview/basic/card">
                                    <div className="flex flex-row items-center space-x-2">
                                        <span>card</span>
                                        <div className="w-3 h-3 bg-neutral-700 rounded-sm"></div>
                                    </div>
                                </Link>
                                <Link className="hover:underline hover:cursor-pointer blur-[4px] backdrop-blur-md" href="/preview/basic/dropdown">
                                    <div className="flex flex-row items-center space-x-2">
                                        <span>dropdown</span>
                                        <svg className="w-2 h-2 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                    </div>
                                </Link>
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/basic/gallery">
                                    <div className="flex flex-row items-center space-x-0.5">
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://static.vecteezy.com/system/resources/previews/023/204/017/original/letter-g-magazine-cut-out-element-vector.jpg" />
                                        </div>
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://static.vecteezy.com/system/resources/previews/023/204/018/original/letter-a-magazine-cut-out-element-vector.jpg" />
                                        </div>
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://as1.ftcdn.net/v2/jpg/05/85/99/78/1000_F_585997883_7zAmSiWLIRcN1FkKnMf5dNrVHj3f9j1P.jpg" />
                                        </div>
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://as1.ftcdn.net/v2/jpg/05/85/99/78/1000_F_585997883_7zAmSiWLIRcN1FkKnMf5dNrVHj3f9j1P.jpg" />
                                        </div>
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://static.vecteezy.com/system/resources/previews/023/204/016/original/letter-e-magazine-cut-out-element-vector.jpg" />
                                        </div>
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://static.vecteezy.com/system/resources/previews/023/204/000/original/letter-r-magazine-cut-out-element-vector.jpg" />
                                        </div>
                                        <div className="bg-neutral-800 w-4 h-full grid place-items-center text-amber-200">
                                            <img className="w-4" src="https://cdn.dribbble.com/users/5914/screenshots/3123466/media/ddf2111d3e6ed4340c4985d8ff4563db.jpg?resize=400x0" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2 shadow-md shadow-amber-800 px-8 py-2 rounded-2xl h-min">
                            <span className="py-4 font-bold text-lg text-center">{`<-`} nav {`->`}</span>
                            <div className="flex flex-col pb-6 text-md">
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/navigation/simple">simple</Link>
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/navigation/tabs">tabs | tabs</Link>
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/navigation/blurred-menu">blur<span className="blur-[1px] backdrop-blur-md">red</span></Link>
                                <Link className="hover:underline hover:cursor-pointer -scale-[1] text-right" href="/preview/navigation/side">epis</Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2 shadow-md shadow-amber-900 px-8 py-2 rounded-2xl h-min cursor-not-allowed">
                            <span className="py-4 font-bold text-lg text-center">forms <span id="typing" className="absolute ml-1">|</span></span>
                            <div className="flex flex-col pb-6 text-md">
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/forms/input">[input]</Link>
                                <Link className="hover:underline hover:cursor-pointer flex flex-row items-center space-x-1" href="/preview/forms/checkbox">
                                    <input className="w-2 h-2" type="checkbox" placeholder='checkbox'/>
                                    <span>checkbox</span>
                                </Link>
                                <Link className="hover:underline hover:cursor-pointer flex flex-row items-center space-x-1" href="/preview/forms/radio">
                                    <input className="w-2 h-2" type="radio" placeholder='radio'/>
                                    <span>radio</span>
                                </Link>
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/forms/address"><span className="text-neutral-600">#</span>address</Link>
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/forms/phonenumber"><span className="text-neutral-600">+1</span> ph0n3 numb3r</Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2 shadow-md shadow-red-700 px-8 py-2 rounded-2xl h-min">
                            <span className="py-4 font-bold text-lg text-center flex items-center space-x-1">
                                <div className="text-sm -rotate-12">tiny</div>
                                <span>but useful</span>
                            </span>
                            <div className="flex flex-col pb-6 text-md">
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/tiny/avatars">
                                    <div className="flex items-center">
                                        <img className="w-6 h-6 rounded-full" src="https://i.scdn.co/image/ab6761670000ecd4a1b2c9183be1d6f8a05ec448" />
                                        <div className="flex flex-col space-y-[-4px] ml-2">
                                            <p className="font-semibold">avatars</p>
                                            <p className="text-xs text-gray-500">collection</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="hover:underline hover:cursor-pointer" href="/preview/tiny/badges"><span className="bg-red-900 text-xs font-medium px-1 py-0.5 rounded-xl">badge</span></Link>
                                <div className="flex items-center space-x-1">
                                    <svg aria-hidden="true" className="w-3 h-3 text-neutral-500 animate-spin fill-red-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <Link className="h-6 hover:underline hover:cursor-pointer" href="/preview/tiny/spinners">spinner</Link>
                                </div>
                                <Link className="hover:underline hover:cursor-pointer flex flex-row space-x-2 items-center" href="/preview/tiny/progress">
                                    <div className="h-2 w-1/5 bg-red-100 rounded-md">
                                        <div className={`bg-red-900 h-2 rounded-full w-[60%]`} />
                                    </div>
                                    <span>progress</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col md:flex-row justify-center md:space-x-12 space-y-12 items-center text-md">
                        <div className="w-full md:w-1/3 flex flex-col space-y-2 shadow-md shadow-red-700 px-8 py-2 rounded-2xl h-min">
                            <span className="py-4 font-bold text-lg text-center">Coming Soon!</span>
                            <div className="flex flex-col space-y-4 pb-6 text-sm">
                                <div className="flex flex-row items-center space-x-1">
                                    <span>wanna collaborate?</span>
                                    <Link className="text-red-600 underline hover:cursor-pointer" href="https://pornhub.com">check my website!</Link>
                                </div>
                                <Link className="text-red-600 underline hover:cursor-pointer" href="https://pornhub.com">more information {`->`}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}