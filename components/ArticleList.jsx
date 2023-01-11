import React from "react";

import ArticleItem from "./ArticleItem.jsx";
import styles from "../styles/Article.module.css";

const ArticleList = (props) => {
  return (
    <div className={styles.grid}>
      {props.articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
