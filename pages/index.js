import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Store</title>
        <meta
          name="description"
          content="Best Pizza Shop In Rangpur, Maidul Bappy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  );
}
