import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
    return (
        <div>
            <EventList items={props.events} />
        </div>
    );
}
export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    if (!data) {
        return {
            notFound: true, // 데이터가 없을 경우 404 페이지로 리디렉션
        };
    }
    ㄴㄴㄴ;
    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1000,
    };
}
export default HomePage;
