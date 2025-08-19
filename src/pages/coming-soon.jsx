import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./coming-soon.module.css";

export default function ComingSoon() {
  return (
    <Layout title="Coming Soon" description="Something awesome is on the way.">
      <main className={styles.wrap}>
        {/* Background ornaments */}
        <div className={styles.bgBlobOne} />
        <div className={styles.bgBlobTwo} />

        <section className={styles.card}>
          <img
            src={useBaseUrl('/img/coming-soon.png')}
            alt="Coming soon illustration"
            className={styles.illustration}
          />

          <h1 className={styles.title}>
            Something <span className={styles.accent}>awesome</span> is coming soon
          </h1>

          <p className={styles.subtitle}>
            We’re polishing the experience to bring you faster cloud savings
            and clearer cost visibility. Please check back later!
          </p>

          <div className={styles.actions}>
            <Link className={`${styles.btn} ${styles.primary}`} to="/">
              Back to Docs
            </Link>
          </div>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} CloudKeeper. All rights reserved.
        </footer>
      </main>
    </Layout>
  );
}
