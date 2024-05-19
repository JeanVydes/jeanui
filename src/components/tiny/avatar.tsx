"use client"
import { useEffect } from "react";

export function SimpleAvatar() {
    return (
        <div className="flex items-center">
            <img alt="" className="w-10 h-10 rounded-full" src="https://i.scdn.co/image/ab6761670000ecd4a1b2c9183be1d6f8a05ec448" />
            <div className="ml-2 flex flex-col">
                <p className="font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">Software Engineer</p>
            </div>
        </div>
    )
}

export function AvatarWithStatus() {
    return (
        <div className="flex items-center">
            <img alt="" className="w-10 h-10 rounded-full" src="https://i.scdn.co/image/ab6761670000ecd4a1b2c9183be1d6f8a05ec448" />
            <div className="ml-2 flex flex-col">
                <p className="font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">Software Engineer</p>
            </div>
            <span className="ml-2 bg-green-500 w-3 h-3 rounded-full"></span>
            <span className="ml-2 bg-red-500 w-3 h-3 rounded-full"></span>
        </div>
    )
}

export function AvatarWithInitials() {
    return (
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <p className="font-semibold text-gray-500">JD</p>
            </div>
            <div className="ml-2 flex flex-col">
                <p className="font-semibold">John Doe</p>
                <p className="text-xs text-gray-500">Software Engineer</p>
            </div>
        </div>
    )
}

export function AvatarWithOnlyImg() {
    return (
        <div className="flex items-center">
            <img alt="" className="w-10 h-10 rounded-full" src="https://i.scdn.co/image/ab6761670000ecd4a1b2c9183be1d6f8a05ec448" />
        </div>
    )
}

export function AvatarWithOnlyImgAndStatus() {
    useEffect(() => {
        let interval = setInterval(() => {
            let avatar = document.getElementById('avatar-status');
            if (avatar) {
                if (avatar.classList.contains('bg-red-700')) {
                    avatar.classList.remove('bg-red-700');
                    avatar.classList.add('bg-green-700');
                } else {
                    avatar.classList.remove('bg-green-700');
                    avatar.classList.add('bg-red-700');
                }
            }
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    });

    return (
        <div className="flex">
            <img alt="" className="w-10 h-10 rounded-full" src="https://i.scdn.co/image/ab6761670000ecd4a1b2c9183be1d6f8a05ec448" />
            <span id="avatar-status" className="ml-7 bg-red-700 text-right w-3 h-3 rounded-full absolute"></span>
        </div>
    )
}


export function AvatarWithOnlyInitials() {
    return (
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <p className="font-semibold text-gray-500">JD</p>
            </div>
        </div>
    )
}