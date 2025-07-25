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
          <h1>Welcome To CloudKeeper Lens</h1>
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
          <Link className={styles.card} to="/docs/billingsummary/overview">
            <h3>Billing Summary</h3>
          </Link>
          <Link className={styles.card} to="/docs/billingconsole/overview">
            <h3>Billing Console</h3>
          </Link>
          <Link className={styles.card} to="/docs/accountwisebreakup/overview">
            <h3>Account-Wise Breakup</h3>
          </Link>
          <Link className={styles.card} to="/docs/hourlydashboard/overview">
            <h3>Hourly Dashboard</h3>
          </Link>
          <Link className={styles.card} to="/docs/costanalysis/overview">
            <h3>Cost Analysis</h3>
          </Link>
          <Link className={styles.card} to="/docs/costbreakup/overview">
            <h3>Cost Breakup</h3>
          </Link>
          <Link className={styles.card} to="/docs/reports/overview">
            <h3>Reports</h3>
          </Link>
          <Link className={styles.card} to="/docs/reservations/overview">
            <h3>Reservations</h3>
          </Link>
          <Link className={styles.card} to="/docs/recommendations">
            <h3>Recommendations</h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}