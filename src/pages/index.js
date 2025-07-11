import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Welcome to Cloudkeeper Lens"
      description="Welcome page for Cloudkeeper Lens">
      <main className={styles.hero}>
        <div className={styles.shapes}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
          <div className={styles.circle5}></div>
        </div>
        <h1>Welcome to Cloudkeeper Lens</h1>
      </main>
    </Layout>
  );
}
