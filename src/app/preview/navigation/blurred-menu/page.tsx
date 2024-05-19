import Menu from '@/components/navigation/Blurred Menu'

export default function () {
    return (
        <>
            <Menu />
            <div className="w-full h-screen z-20">
                <div className="p-4 w-full absolute">
                    <img src="https://www.pegasusart.co.uk/blog/wp-content/uploads/2018/03/Van-Gogh-inspired-2-1024x762.jpg" alt="" className="w-full h-lvh rounded-xl" />
                </div>
            </div>
        </>
    )
}