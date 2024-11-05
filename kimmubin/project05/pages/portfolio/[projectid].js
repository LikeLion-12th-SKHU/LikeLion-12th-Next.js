import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    // router가 정의되지 않은 경우, null을 반환하여 안전하게 처리
    if (!router.isReady) {
        return null;
    }

    console.log(router.pathname);

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
}

export default PortfolioProjectPage;
