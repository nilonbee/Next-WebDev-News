import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { Inter } from "@next/font/google";
import { server } from '../config';

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <div>
      <ArticleList {...props} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `${server}/api/articles`
  );
  const articles = await response.json();
  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
