export async function getAllEvents() {
    try {
        console.log('Starting to fetch events from Firebase...');
        const response = await fetch(
            'https://project07-e0643-default-rtdb.firebaseio.com/events.json'
        );

        // 응답 상태 코드 확인
        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error('Failed to fetch events.');
        }

        const data = await response.json();
        console.log('Fetched data from Firebase:', data); // Firebase로부터 가져온 데이터 출력

        const events = [];
        for (const key in data) {
            events.push({
                id: key,
                ...data[key],
            });
        }
        console.log('Processed events:', events); // 가공된 데이터 확인용
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return []; // 에러 발생 시 빈 배열 반환
    }
}
export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();

    return allEvents.filter((event) => event.isFeatured);
}
export async function getEventById(id) {
    const allEvents = await getAllEvents();
    console.log('Searching for event with ID:', id); // eventId 출력

    return allEvents.find((event) => event.id === id);
}
export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    const allEvents = await getAllEvents;

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        );
    });

    return filteredEvents;
}
