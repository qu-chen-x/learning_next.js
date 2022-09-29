import Image from "next/image";
import Link from "next/link";

import styles from "./layout.module.css";

interface Props {
  children: React.ReactNode;
  home?: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <div className={styles.layout}>
      {home ? (
        <header className={styles.header}>
          <h1>Welcome to Aimee&apos;s Blog!</h1>
          <br />
          <Image src="/images/secImg.jpg" alt="" width={300} height={200} />
        </header>
      ) : null}
      {home ? (
        <main className={styles.main}>
          <h1>Qu Chen</h1>
          <div className={styles.content}>
            Hello,I&lsquo;m Qu Chen.I&lsquo;m,a software engineer.You can
            contract me on github or by email.Welcome to my Blog!If it is
            helpful to you,I&lsquo;ll very happy.
          </div>
          <div className={styles.nextPage}>
            <h2>
              <Link href="/posts/first-test">Go to First-Test!</Link>
            </h2>
          </div>
        </main>
      ) : (
        <main>{children}</main>
      )}
    </div>
  );
}
