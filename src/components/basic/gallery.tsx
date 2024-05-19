"use client";
import { Quicksand } from 'next/font/google'

const font = Quicksand({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export default function Gallery({ elements }: { elements: Array<any> }) {
  return (
    <div className={`w-full ${font.className}`}>
      <div className="columns-1 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {elements.map((element, index) => (
          <div key={index} className="rounded-lg overflow-hidden mt-2">
            {element}
          </div>
        ))}
      </div>
    </div>
  )
}