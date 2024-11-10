"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LIpE from "@/assets/images/lipe.png";
import { useMedia } from "@/hooks/useMedia/useMedia";

function getTitle(pathname: string) {
  switch (pathname) {
    case "/equipes":
      return "LIpE | Equipes";
    case "/projetos":
      return "LIpE | Projetos";
    case "/publicacoes":
      return "LIpE | Publicações";
    case "/contato":
      return "LIpE | Contato";
    default:
      return "LIpE";
  }
}

export function Header() {
  const [menuMobile, setMenuMobile] = React.useState(false);
  const mobile = useMedia("(max-width: 45rem)");

  const pathname = usePathname();
  React.useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  React.useEffect(() => {
    window.document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <header className={`${styles.header}`}>
      <nav className={`container ${styles.nav}`}>
        <Link href={"/"} className={styles.logo}>
          <Image
            // src={`/assets/images/lipe.png`}
            src={LIpE}
            width={60}
            height={60}
            alt={"LIpE"}
            priority
          />
        </Link>
        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              menuMobile && styles.mobileButtonActive
            }`}
            onClick={() => setMenuMobile(!menuMobile)}
          ></button>
        )}

        <div
          className={`${mobile ? styles.navMobile : styles.navPrimaria} ${
            menuMobile && styles.navMobileActive
          }`}
        >
          <Link
            href="/equipes"
            className={pathname === "/equipe" ? "active" : ""}
          >
            Equipes
          </Link>
          <Link
            href="/projetos"
            className={pathname === "/projetos" ? "active" : ""}
          >
            Projetos
          </Link>
          <Link
            href="/publicacoes"
            className={pathname === "/publicacoes" ? "active" : ""}
          >
            Publicações
          </Link>
          <Link
            href="/contato"
            className={pathname === "/contato" ? "active" : ""}
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
