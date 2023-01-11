import React from "react";
import Link from "next/link";
import Meta from "../../../components/Meta";
import { server } from "../../../config";
import styles from "../../../styles/Article.module.css";

const SingleArticle = ({ article }) => {
  return (
    <>
      <Meta
        title={article.title}
        description={article.description}
        keywords={article.excerpt}
      />
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <br />

      <Link href="/"> Go Back </Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await response.json();
  console.log("context", context);

  if (!article) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const response = await fetch(
//     `http://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await response.json();
//   console.log("context", context);

//   if (!article) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await response.json();
//   const ids = articles.map(article => article.id);
//   const paths = ids.map((id) =>({
//     params: {id: id.toString()}
//   }) )
//   return {
//     paths,
//     fallback: false,
//   }
// };

export default SingleArticle;
