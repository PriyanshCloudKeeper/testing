import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Tuner() {
  return (
    <Layout
      title="Tuner"
      description="Cloud cost clarity and optimization, all in one place.">
      <header className={styles.heroBanner}>
        <div className={styles.heroTextContainer}>
          <h1>Welcome To CloudKeeper Tuner</h1>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src={useBaseUrl('/img/ck-ill.png')}
            alt="Illustration of a person using CloudKeeper Tuner"
          />
        </div>
      </header>
      <main className={styles.mainContent}>
        <h2>Key features</h2>
        <p>Ensure your cloud spend is generating value for your business, and eliminate wasted time for your teams.</p>
        <div className={styles.cardGrid}>
          <Link className={`${styles.card} ${styles.cardOverview}`} to="/docs/tuner/intro">
            <h3>Overview</h3>
          </Link>
          <Link className={styles.card} to="/docs/tuner/recommendations/overview">
            <h3>Recommendations</h3>
          </Link>
          <Link className={styles.card} to="/docs/tuner/scheduler/overview">
            <h3>Scheduler</h3>
          </Link>
          <Link className={styles.card} to="/docs/tuner/spotbot/overview">
            <h3>SpotBot</h3>
          </Link>
          <Link className={styles.card} to="/docs/tuner/account/overview">
            <h3>Accounts</h3>
          </Link>
          <Link className={styles.card} to="/docs/tuner/preferences/overview">
            <h3>Preferences</h3>
          </Link>
          <div className={styles.empty}></div>
          <Link className={styles.card} to="/docs/tuner/faq">
            <h3>FAQs</h3>          
          </Link>          
        </div>
      </main>
    </Layout>
  );
}