import CodeBanner from '@/components/code'
import Menu from '@/components/navigation/Blurred Menu'

export default function BlurredMenuPreview() {
    return (
        <>
            <div className="absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/navigation/Blurred%20Menu.tsx' />
            </div>
            <div className="mt-12">
                <Menu />
            </div>
            <div className="w-full h-screen z-20 mt-20">
                <div className="p-4 w-full absolute">
                    <img src="https://www.pegasusart.co.uk/blog/wp-content/uploads/2018/03/Van-Gogh-inspired-2-1024x762.jpg" alt="" className="w-full h-lvh rounded-xl" />
                </div>
            </div>
        </>
    )
}