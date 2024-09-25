import Link from "next/link";

// dynamic route (동적 라우트)
// [] <- 안에 들어간것이 키
// 키 아래 저장된 값은 URL에 인코딩된 정확한 값 ex) post-1
export default function BlogPage() {
  return (
    <main>
      <h1>The Blog</h1>
      <p>
        <Link href={"/blog/post-1"}>Post 1</Link>
      </p>
      <p>
        <Link href={"/blog/post-2"}>Post 2</Link>
      </p>
    </main>
  );
}
