import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
import LIpE from "@/assets/images/lipe.png";
import Button from "@/components/button/button";

export default function Home() {
  return (
    <div className={`${styles.introducaoBg}`}>
      <div className={`container ${styles.introducao}`}>
        <div className={styles.introducaoConteudo}>
          <h1 className={"font-1-xxl"}>LIpE</h1>
          <p className={"font-2-l"}>Laboratório Inteligente para Educação</p>
          <Button label={"FALE CONOSCO"} />
        </div>
        <Image src={LIpE} width={410} height={550} alt={"LIpE"} />
      </div>
    </div>
  );
}
