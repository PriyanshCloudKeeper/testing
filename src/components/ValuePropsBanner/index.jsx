import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

export default function ValuePropsBanner({
  preText = "Your Comprehensive",
  highlightText = "Cloud Cost Optimization Partner",
  postText = "for",
  features = [
    {
      iconSrc: "/img/icons/24x7-support.png",
      iconAlt: "24x7 support",
      title: "Unlimited",
      subtitle: "Cloud Support",
    },
    {
      iconSrc: "/img/icons/cost-savings.png",
      iconAlt: "Savings",
      title: "Guaranteed",
      subtitle: "Cost Savings",
    },
    {
      iconSrc: "/img/icons/cloud-visibility.png",
      iconAlt: "Visibility",
      title: "Enhanced Cloud",
      subtitle: "Cost Visibility",
    },
  ],
  className,
}) {
  return (
    <section className={clsx(styles.wrapper, className)}>
      <h2 className={styles.headline}>
        <span className={styles.headPre}>{preText}&nbsp;</span>
        <span className={styles.headHighlight}>{highlightText}&nbsp;</span>
        <span className={styles.headPost}>{postText}</span>
      </h2>

      <div className={styles.features} role="list">
        {features.map((f, i) => (
          <div key={i} role="listitem" className={styles.featureItem}>
            {f.iconSrc ? (
              <img
                src={useBaseUrl(f.iconSrc)}
                alt={f.iconAlt ?? ""}
                className={styles.icon}
                loading="lazy"
              />
            ) : null}
            <div className={styles.featureText}>
              <div className={styles.featureTitle}>{f.title}</div>
              {f.subtitle ? (
                <div className={styles.featureSubtitle}>{f.subtitle}</div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
