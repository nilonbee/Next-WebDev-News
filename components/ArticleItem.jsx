import Link from "next/link";
import React from "react";

import styles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <div>
      <Link href={`article/${article.id}`}>
        <h6 className={styles.card}>
          <h3>{article.title} &rarr;</h3>
          <h6>{article.body}</h6>
        </h6>
      </Link>
    </div>
  );
};

export default ArticleItem;
