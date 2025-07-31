import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Cloud cost clarity and optimization, all in one place.">
      
      <header className={styles.heroBanner}>
        <div className={styles.heroTextContainer}>
          <h1>Welcome To CloudKeeper Docs</h1>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src={useBaseUrl('/img/ck-ill.png')}
            alt="Illustration of a person using CloudKeeper Lens"
          />
        </div>
      </header>

      <main className={styles.mainContent}>
        <h2>Key features</h2>
        <p>Ensure your cloud spend is generating value for your business, and eliminate wasted time for your teams.</p>
        <div className={styles.cardGrid}>
          <Link className={`${styles.card} ${styles.cardLens}`} to="/lens">
            <h3>Lens</h3>
          </Link>
          <div className={styles.empty}></div>
          <Link className={`${styles.card} ${styles.cardTuner}`} to="/tuner">
            <h3>Tuner</h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
