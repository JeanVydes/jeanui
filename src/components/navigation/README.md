# Navigation Components

## Blurred Menu
inspired on [OpenAI](https://openai.com/chatgpt/)

````md
<details>
  <summary>show code</summary>
  
  ```js
    "use client";

    import { useEffect } from "react";
    import { Quicksand } from 'next/font/google'

    const font = Quicksand({
    weight: "400",
    display: "swap",
    subsets: ["latin"],
    });

    export default function Menu() {
    useEffect(() => {
        const productsElement = document.getElementById('products-menu');
        const developersElement = document.getElementById('developers-menu');

        function showProducts() {
        if (productsElement) productsElement.classList.remove('hidden');
        if (developersElement) developersElement.classList.add('hidden');
        }

        function hideProducts() {
        if (productsElement) productsElement.classList.add('hidden');
        }

        function showDevelopers() {
        if (developersElement) developersElement.classList.remove('hidden');
        if (productsElement) productsElement.classList.add('hidden');
        }

        function hideDevelopers() {
        if (developersElement) developersElement.classList.add('hidden');
        }

        const productsTrigger = document.getElementById('products-trigger');
        const developersTrigger = document.getElementById('developers-trigger');

        if (productsTrigger && productsElement) {
        productsTrigger.addEventListener('mouseenter', showProducts);
        productsTrigger.addEventListener('mouseleave', () => {
            setTimeout(() => {
            if (!productsElement.matches(':hover') && !productsTrigger.matches(':hover')) {
                hideProducts();
            }
            }, 200);
        });
        productsElement.addEventListener('mouseleave', () => {
            setTimeout(() => {
            if (!productsElement.matches(':hover') && !productsTrigger.matches(':hover')) {
                hideProducts();
            }
            }, 200);
        });
        }

        if (developersTrigger && developersElement) {
        developersTrigger.addEventListener('mouseenter', showDevelopers);
        developersTrigger.addEventListener('mouseleave', () => {
            setTimeout(() => {
            if (!developersElement.matches(':hover') && !developersTrigger.matches(':hover')) {
                hideDevelopers();
            }
            }, 200);
        });
        developersElement.addEventListener('mouseleave', () => {
            setTimeout(() => {
            if (!developersElement.matches(':hover') && !developersTrigger.matches(':hover')) {
                hideDevelopers();
            }
            }, 200);
        });
        }

        return () => {
        if (productsTrigger) {
            productsTrigger.removeEventListener('mouseenter', showProducts);
            productsTrigger.removeEventListener('mouseleave', hideProducts);
        }
        if (developersTrigger) {
            developersTrigger.removeEventListener('mouseenter', showDevelopers);
            developersTrigger.removeEventListener('mouseleave', hideDevelopers);
        }
        if (productsElement) {
            productsElement.removeEventListener('mouseleave', hideProducts);
        }
        if (developersElement) {
            developersElement.removeEventListener('mouseleave', hideDevelopers);
        }
        };
    }, []);

    return (
        <div className={`w-full h-screen fixed z-50 ${font.className}`}>
        <div className="w-full h-12 text-gray-50 text-sm bg-black/60 backdrop-blur-md">
            <div className="w-full h-full flex flex-row flex-nowrap items-center justify-center space-between px-24 py-0">
            <div className="h-5 flex-1 flex justify-start items-center">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png" alt="logo" className="w-4 h-4" />
            </div>
            <div className="h-5 flex-1 flex justify-center items-center text-center font-bold">
                <div className="flex-1 px-4" id="products-trigger">
                <span className="cursor-pointer">Products</span>
                </div>
                <div className="flex-1 px-4" id="developers-trigger">
                <span className="cursor-pointer">Developers</span>
                </div>
            </div>
            <div className="flex-1 flex justify-end items-center h-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
            </div>
        </div>
        <ProductsMenu />
        <DeveloperMenu />
        </div>
    )
    }

    export function ProductsMenu() {
    return (
        <div id="products-menu" className="transition-all delay-150 duration-300 w-full h-full text-gray-50 text-sm bg-black/60 backdrop-blur-md hidden">
            <div className="px-32 py-12 flex text-md font-semibold">
            <div className="flex flex-col w-1/3">
                <div className="text-lg font-bold pb-5">Cloud</div>
                <div className="flex flex-col space-y-2">
                <div className="cursor-pointer hover:underline">Lambda</div>
                <div className="cursor-pointer hover:underline">CloudFront</div>
                <div className="cursor-pointer hover:underline">BedRock</div>
                <div className="cursor-pointer hover:underline">S3</div>
                <div className="cursor-pointer hover:underline">EC2</div>
                <div className="cursor-pointer hover:underline">Route 53</div>
                <div className="cursor-pointer hover:underline">API Gateway</div>
                <div className="cursor-pointer hover:underline">Text AI</div>
                </div>
            </div>
            <div className="flex flex-col w-1/3">
                <div className="text-lg font-bold pb-5">Coming Soon!</div>
                <div className="flex flex-col space-y-2">
                <div className="cursor-pointer hover:underline">CloudWatch</div>
                <div className="cursor-pointer hover:underline">CloudFormation</div>
                <div className="cursor-pointer hover:underline">CloudTrail</div>
                <div className="cursor-pointer hover:underline">CloudSearch</div>
                </div>
            </div>
            </div>
        </div>
    )
    }

    export function DeveloperMenu() {
    return (
        <div id="developers-menu" className="w-full h-full text-gray-50 text-sm bg-black/60 backdrop-blur-md hidden">
        <div className="px-32 py-12 flex text-md font-semibold">
            <div className="flex flex-col w-1/3">
            <div className="text-lg font-bold pb-5">Developer Tools</div>
            <div className="flex flex-col space-y-2">
                <div className="cursor-pointer hover:underline">API Gateway</div>
                <div className="cursor-pointer hover:underline">Lambda</div>
                <div className="cursor-pointer hover:underline">CloudFront</div>
                <div className="cursor-pointer hover:underline">S3</div>
                <div className="cursor-pointer hover:underline">EC2</div>
                <div className="cursor-pointer hover:underline">Route 53</div>
                <div className="cursor-pointer hover:underline">CloudWatch</div>
                <div className="cursor-pointer hover:underline">CloudFormation</div>
                <div className="cursor-pointer hover:underline">CloudTrail</div>
                <div className="cursor-pointer hover:underline">CloudSearch</div>
            </div>
            </div>
            <div className="flex flex-col w-1/3">
            <div className="text-lg font-bold pb-5">Coming Soon!</div>
            <div className="flex flex-col space-y-2">
                <div className="cursor-pointer hover:underline">Text AI</div>
                <div className="cursor-pointer hover:underline">Image AI</div>
                <div className="cursor-pointer hover:underline">Video AI</div>
                <div className="cursor-pointer hover:underline">Audio AI</div>
            </div>
            </div>
        </div>
        </div>
    )
    }
    ```
</details>
````