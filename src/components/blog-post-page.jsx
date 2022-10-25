import { MDXProvider } from "@mdx-js/react";


import styles from "../../styles/BlogPage.module.css";
import Dummy from "../data/dummy.md"



const components = {};

export default function BlogPostPage(props){
    return (
      <div className={styles.BlogReadPage}>
        <div className={styles.postImageBlock}>
          <img
            className={styles.postImage}
            src="wallpaper.png"
            alt="Blog-Pic"
          />
        </div>
        <div className={styles.blogPostHeadBlock}>
          <div className={styles.blogTitle}>
            Blog Title - Super Admin offer the wotk fo the indo-nation output
            source of coming times
          </div>
          <div className={styles.blogPostPubDate}>12 October, 2022</div>
          <div className={styles.postTags}>
            <span className={styles.aws}>#aws</span>
            <span className={styles.python}>#python</span>
            <span className={styles.boto3}>#boto3</span>
            <span className={styles.react}>#react</span>
          </div>
        </div>

        <div className={styles.BlogPostContent}>
          <MDXProvider components={components}>
            <Dummy />
          </MDXProvider>
        </div>
      </div>
    );
}



