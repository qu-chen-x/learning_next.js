import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";

import Layout from "../../components/layout";
import Date from "../../components/date";
import styles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({
  postData,
}: {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <div className={styles.container}>
      <Layout home={false}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={styles.headingXl}>{postData.title}</h1>
          <div className={styles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    </div>
  );
}
