export default function BlogPostPage({ params }) {
  // { params } 넥제에서 자동으로 props를 넘겨줌
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
