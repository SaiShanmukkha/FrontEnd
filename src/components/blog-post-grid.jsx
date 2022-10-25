import PostCard from "../components/post-card";
import styles from "../../styles/Home.module.css";

export default function BlogPostGrid() {
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </div>
      </main>
  );
}
