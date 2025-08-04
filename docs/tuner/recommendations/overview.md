---
sidebar_position: 1
title: Recommendations Overview
---

import React from 'react';

# Recommendations Overview

The **Recommendations Dashboard** in CloudKeeper Tuner provides a centralized view of all cost optimization opportunities across your AWS environment.  
It helps identify inefficiencies, prioritize actions, and monitor savings with real-time data.

---

## Overview of Metrics

At the top of the dashboard, key financial and operational metrics are displayed to provide quick insights:

- **Total Spend**: Forecasted AWS spend based on current usage trends.  
- **Potential Savings**: Estimated monthly savings if all recommendations are implemented.  
- **Savings Achieved**: Total savings realized to date by acting on recommendations.  
- **Resources Scanned**: Number of AWS resources analyzed during the latest scan.  
- **Total Recommendations**: Total actionable recommendations available.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/recommend-overview-metrics.png" alt="Recommendations dashboard with total spend, potential savings, savings achieved, and resources scanned" />
</div>

---

## Recommendation Categories

Recommendations are grouped into **three main categories** for targeted cost optimization:

1. **Cleaner** – Identifies unused or idle resources that can be safely removed.  
2. **Over-Provisioned** – Flags resources that are oversized compared to their usage, suggesting right-sizing.  
3. **Modernization** – Highlights outdated resources and suggests upgrades to more cost-efficient alternatives.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/recommend-categories.png" alt="Tabs for Cleaner, Over-Provisioned, and Modernization recommendations" />
</div>

---

## Additional Features

The Recommendations Dashboard also includes powerful features to simplify optimization:

- **CSV Export** – Download the list of recommendations for offline review or reporting.  
- **Region Filter** – Filter recommendations based on specific AWS regions.  
- **Snooze List** – Temporarily hide recommendations you want to defer and review them later.  
- **Remediation History** – Track actions taken, their status, and savings achieved.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/recommend-filter-export.png" alt="Region filter and export options in recommendations dashboard" />
</div>

---

## Navigating Recommendations

From this dashboard, you can:
- Switch between **Cleaner**, **Over-Provisioned**, and **Modernization** tabs to focus on specific optimization areas.
- Apply actions such as **Auto Remediation** or snooze individual recommendations.
- View detailed breakdowns of recommendations at the resource level.

---

The Recommendations Overview gives you **a complete picture of cost-saving opportunities** in your AWS account, serving as the entry point to more detailed views of each category.
