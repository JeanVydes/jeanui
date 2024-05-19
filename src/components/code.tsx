import Link from "next/link";

export default function CodeBanner({ github_url }: { github_url: string }) {
    return (
        <div className = "w-full h-auto h-12 pb-12 fixed z-50" >
            <div className="flex flex-row items-center w-full h-12 text-sky-50 text-sm bg-black/80 backdrop-blur-md">
                <div className="w-full justify-end text-right">
                    <Link href={github_url} className="pr-5 font-bold underline hover:cursor-pointer">CHECK CODE</Link>
                </div>
            </div>
        </div >
    )
}