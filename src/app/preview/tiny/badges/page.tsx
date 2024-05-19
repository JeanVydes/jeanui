import CodeBanner from '@/components/code';
import { 
    SimpleBadge,
    BadgeWithIcon,
 } from '@/components/tiny/badge'

export default function BadgesPreview() {
    let badges = [
        <SimpleBadge color='bg-red-500' key={0} />,
        <SimpleBadge color='bg-yellow-500' key={1} />,
        <SimpleBadge color='bg-green-500' key={2} />,
        <SimpleBadge color='bg-blue-500' key={3} />,
        <SimpleBadge color='bg-indigo-500' key={4} />,
        <SimpleBadge color='bg-purple-500' key={5} />,
        <SimpleBadge color='bg-pink-500' key={6} />,
        <SimpleBadge color='bg-gray-500' key={7} />,
        
        <BadgeWithIcon color='bg-red-500' key={8} />,
        <BadgeWithIcon color='bg-yellow-500' key={9} />,
        <BadgeWithIcon color='bg-green-500' key={10} />,
        <BadgeWithIcon color='bg-blue-500' key={11} />,
        <BadgeWithIcon color='bg-indigo-500' key={12} />,
        <BadgeWithIcon color='bg-purple-500' key={13} />,
        <BadgeWithIcon color='bg-pink-500' key={14} />,
        <BadgeWithIcon color='bg-gray-500' key={15} />,
    ];

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/tiny/badge.tsx' />
            </div>
            <div className="w-full h-screen z-20 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {badges.map((badge, index) => (
                        <div className="w-full grid place-content-center border border-neutral-500" key={index}>
                            <div className="p-8">
                                {badge}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}