import { useState, useEffect } from 'react';
import useSWR from 'swr';
function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR(
        'https://project07-e0643-default-rtdb.firebaseio.com/sales.json'
    );
    useEffect(() => {
        if (data) {
            const transformedSales = [];

            for (const key in data) {
                transformedSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume,
                });
            }
            setSales(transformedSales);
        }
    }, [data]);
    // useEffect(() => {
    //     setIsLoading(true);
    //
    // }, []);
    if (error) {
        return <p>Failed to load</p>;
    }
    if (!data && !sales) {
        return <p>Loading...</p>;
    }
    if (!sales) {
        return;
    }
    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - ${sale.volume}
                </li>
            ))}
        </ul>
    );
}
export async function getStaticProps() {
    const response = await fetch(
        'https://project07-e0643-default-rtdb.firebaseio.com/sales.json'
    );
    const data = await response.json();

    const transformedSales = [];

    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        });
    }
    return { props: { sales: transformedSales } };
}

export default LastSalesPage;
