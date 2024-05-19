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
    const closeTargets = document.getElementsByClassName('close-target');
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

    if (closeTargets) {
      for (let i = 0; i < closeTargets.length; i++) {
        closeTargets[i].addEventListener('click', () => {
          if (productsElement) productsElement.classList.add('hidden');
          if (developersElement) developersElement.classList.add('hidden');
        });
      }
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
      <div className="w-full h-18 md:h-12 text-gray-50 text-sm bg-black/60 backdrop-blur-md">
        <div className="w-full h-full flex flex-row flex-nowrap items-center justify-center space-between md:px-24 md:py-0 py-5">
          <div className="h-5 w-1/12 md:w-full md:flex-1 flex justify-center md:justify-start items-center ml-4">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png" alt="logo" className="w-6 md:w-4 md:h-4" />
          </div>
          <div className="grow md:grow-0 h-full w-full md:w-auto md:h-5 flex-1 flex flex-col md:flex-row justify-center items-center text-center font-bold">
            <div className="h-9 grid place-items-center px-4 w-full" id="products-trigger">
              <span className="cursor-pointer w-full underline md:no-underline">Products</span>
            </div>
            <div className="h-9 grid place-items-center px-4 w-full" id="developers-trigger">
              <span className="cursor-pointer w-full underline md:no-underline">Developers</span>
            </div>
          </div>
          <div className="md:flex-1 w-8 md:w-full flex justify-center md:justify-end items-center h-5 mr-4 md:m-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-5 md:h-5 stroke-2">
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
      <div className="px-12 md:px-32 py-4 md:py-12 flex flex-row justify-center w-full text-md font-semibold">
        <div className="w-full flex flex-row justify-end absolute px-8 md:px-32">
          <span className="close-target text-4xl md:text-xl hover:underline hover:cursor-pointer">X</span>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/3">
          <div className="text-lg font-bold pb-5">Cloud</div>
          <div className="flex flex-col space-y-2">
            <div className="cursor-pointer hover:underline">Lambda</div>
            <div className="cursor-pointer hover:underline">CloudFront</div>
            <div className="cursor-pointer hover:underline">BedRock</div>
            <div className="cursor-pointer hover:underline">S3</div>
            <div className="cursor-pointer hover:underline">EC2</div>
            <div className="cursor-pointer hover:underline">Route 53</div>
            <div className="cursor-pointer hover:underline">API Gateway</div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/3">
          <div className="text-lg font-bold pb-5">Artificial Intelligence</div>
          <div className="flex flex-col space-y-2">
            <div className="cursor-pointer hover:underline">Text Generator</div>
            <div className="cursor-pointer hover:underline">Image Generator</div>
            <div className="cursor-pointer hover:underline">Voice Generator</div>
            <div className="cursor-pointer hover:underline">Face Recognition</div>
            <div className="cursor-pointer hover:underline">Object Detection</div>
            <div className="cursor-pointer hover:underline">Speech Recognition</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DeveloperMenu() {
  return (
    <div id="developers-menu" className="transition-all delay-150 duration-300 w-full h-full text-gray-50 text-sm bg-black/60 backdrop-blur-md hidden">
      <div className="px-12 md:px-32 py-4 md:py-12 flex flex-row justify-center w-full text-md font-semibold">
        <div className="w-full flex flex-row justify-end absolute px-8 md:px-32">
          <span className="close-target text-4xl md:text-xl hover:underline hover:cursor-pointer">X</span>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/3">
          <div className="text-lg font-bold pb-5">Developers</div>
          <div className="flex flex-col space-y-2">
            <div className="cursor-pointer hover:underline">Documentation</div>
            <div className="cursor-pointer hover:underline">API Reference</div>
            <div className="cursor-pointer hover:underline">SDKs</div>
            <div className="cursor-pointer hover:underline">CLI</div>
            <div className="cursor-pointer hover:underline">Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
}