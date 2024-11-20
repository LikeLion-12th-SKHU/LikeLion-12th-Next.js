import path from 'path';
import fs from 'fs/promises';

import Link from 'next/link';

function HomePage(props) {
    const { products } = props;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>{product.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);

    const data = JSON.parse(jsonData);

    // 데이터 구조 확인
    console.log('파싱된 데이터:', data);
    if (!data) {
        return {
            redirect: {
                destination: '/no-data',
            },
        };
    }
    if (data.products.length === 0) {
        return { notFound: true };
    }
    return {
        props: {
            products: data.products || [], // JSON 구조에 맞춰서 수정
        },
        revalidate: 10,
    };
}

export default HomePage;
