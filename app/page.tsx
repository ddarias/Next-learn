import Image from "next/image";
import styles from "./ui/home.module.css";
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <>
      <h1>Hello Next.js</h1>
      <div className={styles.shape}></div>
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>
        , brought to you by Vercel.
      </p>
      <Image
        className={styles["hero-image-desktop"]}
        alt="My Desktop image"
        src="/hero-desktop.png"
        width={1000}
        height={760}
      ></Image>
      <Image
        className={styles["hero-image-mobile"]}
        alt="My Mobile image"
        src="/hero-mobile.png"
        width={280}
        height={310}
      ></Image>
    </>
  );
}
