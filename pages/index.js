import Head from "next/head";
import Image from "next/image";
import JNSection from "../components/home/JNSection";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="light">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


     

      <Layout> <JNSection /></Layout>

    </div>
  );
}
