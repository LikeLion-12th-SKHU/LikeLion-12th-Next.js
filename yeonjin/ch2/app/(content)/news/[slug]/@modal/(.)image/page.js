
import { notFound } from "next/navigation";

import { notFound, useRouter } from "next/navigation";




export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
      notFound();
    }
  
    return (
        <>
            <modalBackdrop></modalBackdrop>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/image/news/${newsItem.image}`} alt="{newsItem.}"></img>
                </div>
            </dialog>
            
        </>
      );
  } 

//   4:17