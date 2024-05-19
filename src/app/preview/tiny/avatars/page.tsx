import { 
    SimpleAvatar,
    AvatarWithStatus,
    AvatarWithInitials,
    AvatarWithOnlyImg,
    AvatarWithOnlyImgAndStatus,
    AvatarWithOnlyInitials,
 } from '@/components/tiny/avatar'

export default function () {
    let avatars = [
        <SimpleAvatar />,
        <AvatarWithStatus />,
        <AvatarWithInitials />,
        <AvatarWithOnlyImg />,
        <AvatarWithOnlyImgAndStatus />,
        <AvatarWithOnlyInitials />,
    ];

    return (
        <>
            <div className="w-full h-screen z-20">
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