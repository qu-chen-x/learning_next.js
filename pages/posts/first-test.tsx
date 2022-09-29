import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Layout, Date } from "../../components";
import styles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

interface AllPostsData {
  id: string;
  date?: string;
  title?: string;
}
export async function getStaticProps() {
  const allPostsData: AllPostsData[] = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function FirstTest({
  allPostsData,
}: {
  allPostsData: AllPostsData[];
}) {
  return (
    <div className={styles.container}>
      <Layout home={false}>
        <Head>
          <title>First Test</title>
        </Head>
        <main className={styles.main}>
          <h1>This is FirstTest!</h1>
          <h2>
            <Link href="/">Back to Index!</Link>
          </h2>
          <Image src="/images/firImg.jpg" alt="pic" height={300} width={500} />

          <div>
            <ul className={styles.list}>
              {allPostsData?.map(({ id, date, title }: AllPostsData) => (
                <li className={styles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={styles.lightText}>
                    <Date dateString={date as string} />
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </Layout>
    </div>
  );
}
