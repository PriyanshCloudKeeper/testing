// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ValuePropsBanner from '@site/src/components/ValuePropsBanner';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const enableTuner = Boolean(siteConfig?.customFields?.enableTuner);

  return (
    <Layout
      title="Home"
      description="Cloud cost clarity and optimization, all in one place."
    >
      <header className={styles.heroBanner}>
        <div className={styles.heroTextContainer}>
          <h1>Welcome To CloudKeeper Docs</h1>
        </div>
        <div className={styles.heroImageContainer}>
          {/* Light Mode Image */}
          <img
            src={useBaseUrl('/img/cloudkeeper-illustration.png')}
            alt="Illustration of a person using CloudKeeper Tuner"
            className="light-theme-image"
          />
          {/* Dark Mode Image */}
          <img
            src={useBaseUrl('/img/cloudkeeper-illustration-dark.png')}
            alt="Illustration of a person using CloudKeeper Tuner"
            className="dark-theme-image"
          />
        </div>
      </header>

      <main className={styles.mainContent}>
        <h2>Key Offerings</h2>
        <p>
          Ensure your cloud spend is generating value for your business, and
          eliminate wasted time for your teams.
        </p>

        <div className={styles.featureButtons}>
          <Link
            className={`${styles.card} ${styles.cardSmall} ${styles.cardLens}`}
            to="/lens"
          >
            <h3>Lens</h3>
          </Link>

          <Link
            className={`${styles.card} ${styles.cardSmall} ${styles.cardTuner}`}
            to={enableTuner ? '/tuner' : '/coming-soon'}
          >
            <h3>Tuner</h3>
          </Link>
        </div>

        <div className={styles.sectionGapLg} />

        <ValuePropsBanner
          preText="Your Comprehensive"
          highlightText="Cloud Cost Optimization Partner"
          postText="for"
        />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} CloudKeeper. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
}