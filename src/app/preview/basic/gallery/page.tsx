import Gallery from '@/components/basic/gallery'
import CodeBanner from '@/components/code';
import Image from 'next/image'

export default function GalleryPreview() {
    let imgs = [
        "https://www.generosliterarios.net/wp-content/uploads/59454254_1005.jpg",
        "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436535/796067/main-image",
        "https://cdn.britannica.com/78/69678-050-491A5ED8/Bedroom-oil-canvas-Vincent-van-Gogh-Art-1889.jpg",
        "https://th-thumbnailer.cdn-si-edu.com/RxeLKsGhOSLM4qETDGFy8uHPATQ=/800x600/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Vincent-van-Gogh-Doctor-Gachet-631.jpg",
        "https://static.mfah.com/images/van-gogh---irises-van-gogh-museum.10082613753953305911.jpg?width=796",
        "https://cdn.britannica.com/33/130833-050-462F8F09/Wheatfield-Crows-oil-canvas-Vincent-van-Gogh-1890.jpg",
        "https://th-thumbnailer.cdn-si-edu.com/nu3wyh3seRWK1IScbTd1aisYXEY=/1072x720/filters:no_upscale():focal(640x640:641x641)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/3e/0b/3e0b2b4b-2b70-4309-a308-8bbf08360e94/national_gallery_of_the_faroe_islands_ai_exhibit_insprired_by_van_gogh.png",
        "https://www.paint.org/wp-content/uploads/2019/11/Van-Gogh-The-Starry-Night-adult-coloring-page-1.jpg",
        "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436530/796038/main-image"
    ];

    let elements = imgs.map((img, index) => (
        <div className="rounded-lg" key={index}>
            <img className="w-full rounded-lg" src={img} alt="" />
        </div>
    ));

    return (
        <>
            <div className=" absolute">
                <CodeBanner github_url='https://github.com/JeanVydes/jeanui/blob/dimension137/src/components/basic/gallery.tsx' />
            </div>
            <div className="w-full z-20">
                <Gallery elements={elements} />
            </div>
        </>
    )
}