import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Preview",
  description: "Preview the JeanUI component in live view",
};

export default function ComponentPreviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="w-full h-auto h-12 pb-12 fixed z-50">
            <div className="flex flex-row items-center w-full h-12 text-sky-50 text-sm bg-black/80 backdrop-blur-md">
                <div className="w-1/2 justify-start text-left">
                    <Link href="/" className="pl-5 underline hover:cursor-pointer">Return</Link>
                </div>
                <div className="w-1/2 justify-end text-right">
                    <span className="pr-5 font-bold">LIVE VIEW</span>
                </div>
            </div>
        </div>
        <div className="component-wrapper w-full h-full pt-12 z-10 ">
            {children}
        </div>
    </>
  );
}
