import CodeBanner from '@/components/code';
import { 
    SimpleAvatar,
    AvatarWithStatus,
    AvatarWithInitials,
    AvatarWithOnlyImg,
    AvatarWithOnlyImgAndStatus,
    AvatarWithOnlyInitials,
 } from '@/components/tiny/avatar'

export default function AvatarsPreview() {
    let avatars = [
        <SimpleAvatar key={0} />,
        <AvatarWithStatus key={1} />,
        <AvatarWithInitials key={2} />,
        <AvatarWithOnlyImg key={3} />,
        <AvatarWithOnlyImgAndStatus key={4} />,
        <AvatarWithOnlyInitials key={5} />,
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/tiny/avatar.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {avatars.map((avatar, index) => (
                        <div className="w-full grid place-content-center border border-neutral-500" key={index}>
                            <div className="p-8">
                                {avatar}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}