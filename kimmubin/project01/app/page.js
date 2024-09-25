import Link from 'next/link';
import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.slideshow}>
                    <ImageSlideshow />
                </div>
                <div>
                    <div className={classes.hero}>
                        <h1>NextLevel Food for NextLevel Foodies</h1>
                        <p>Taste & share food from all over the world.</p>
                    </div>
                    <div className={classes.cta}>
                        <Link href="/app/community">Join th Community</Link>
                        <Link href="">Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main></main>
        </>
    );
}
