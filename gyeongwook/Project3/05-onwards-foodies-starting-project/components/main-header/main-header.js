// header를 별도의 컴포넌트로 뺴서 아웃소싱

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      {/* 형제 요소를 사용하기 위해 프래그먼트 사용 <> */}
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* react img 를 사용하는것 보단 NextJS에서 제공하는 Image 컴포넌트를 사용하는것이 훨신 효과적 지연로딩 + 기기에 따른 파일변경 */}
          <Image src={logoImg} alt="A plate with food on it" priority />
          {/* priority 속성을 사용하여 우선적으로 로딩으로 변경 */}
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
