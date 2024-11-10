import logo from "@/assets/logo.png";
import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        <Image
          src={logo}
          // width={100}
          // height={100}
          sizes="10vw"
          priority // 지연 로딩 비활성화, 항상 활성화
          alt="Mobile phone with posts feed on it"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-post">
              New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
