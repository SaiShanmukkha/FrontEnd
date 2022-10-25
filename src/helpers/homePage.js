import Head from "next/head";


import BlogPostGrid from '../components/blog-post-grid.jsx'
import styles from "../../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSS Proxima -Blog Home</title>
        <meta name="description" content="A Blogging Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogPostGrid />
    </div>
  );
}
