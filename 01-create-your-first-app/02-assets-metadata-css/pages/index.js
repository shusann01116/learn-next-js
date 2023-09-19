import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be build a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href="/posts/first-post">First Post</Link>
    </Layout>
  );
}
