// src/pages/lens.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Lens() {
  return (
    <Layout
      title="Lens"
      description="Cloud cost clarity and optimization, all in one place.">
      <header className={styles.heroBanner}>
        <div className={styles.heroTextContainer}>
          <h1>Welcome To CloudKeeper Lens</h1>
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
        <h2>Key features</h2>
        <p>Ensure your cloud spend is generating value for your business, and eliminate wasted time for your teams.</p>
        <div className={styles.cardGrid}>
          <Link className={`${styles.card} ${styles.cardOverview}`} to="/docs/lens/intro">
            <h3>Overview</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/billingsummary/overview">
            <h3>Billing Summary</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/billingconsole/overview">
            <h3>Billing Console</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/accountwisebreakup/overview">
            <h3>Account-Wise Breakup</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/hourlydashboard/overview">
            <h3>Hourly Dashboard</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/costanalysis/overview">
            <h3>Cost Analysis</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/costbreakup/overview">
            <h3>Cost Breakup</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/reports">
            <h3>Reports</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/reservations/overview">
            <h3>Reservations</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/recommendations">
            <h3>Recommendations</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/cur">
            <h3>CUR</h3>
          </Link>
          <Link className={styles.card} to="/docs/lens/faq">
            <h3>FAQs</h3>
          </Link>
        </div>
      </main>
    </Layout>
  );
}