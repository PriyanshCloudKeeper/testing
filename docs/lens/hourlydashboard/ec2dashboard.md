---
sidebar_position: 2
title: EC2
---

import React from 'react';

# EC2 Hourly Dashboard

The EC2 Hourly Dashboard provides a **granular, hour-by-hour view** of your EC2 costs, enabling you to track **per-day trends**, understand **spending spikes**, and optimize your cloud workloads.

The Dashboard equips you with powerful insights to understand your **hourly compute spend patterns**, improve **forecasting**, and identify areas for **cost savings and optimization**. By leveraging these granular insights, your FinOps or engineering team can make smarter, data-driven decisions.

---

### Overview and Filters

At the top, you can analyze costs by:
- **Service**
- **Region**
- **Operating System**
- **Pricing Type**

Additionally, you can toggle between **Unblended**, **Amortized**, and **ODE** cost types to see different financial perspectives. The flexible **time range filter** helps you examine specific windows (e.g., 12-Jun-2025 to 11-Jul-2025).

<div style={{ textAlign: 'center' }}>
  <img src="/img/hourlydashboard/hourly-ec2-overview.png" alt="Hourly EC2 dashboard overview" />
</div>

---

### Cost Metrics

- **Baseline Spend**: Represents the minimum possible spend by assuming lowest hourly usage ($122,964).
- **Total Spend**: Your actual spend over the selected period ($272,794).
- **Baseline vs Total**: Percentage of baseline relative to total spend (45.08%).

These metrics help assess how efficient your current resource usage is and identify potential optimization opportunities.

---

### Heatmap Insights

The heatmap visualizes your **hourly cost trends**, highlighting:
- **Peak usage hours**, which might correspond to autoscaling or batch processing activities.
- **Idle or low-usage periods**, presenting opportunities for cost optimization.

You can use this data to analyze patterns, understand scaling behavior, and plan for better instance scheduling.

<div style={{ textAlign: 'center' }}>
  <img src="/img/hourlydashboard/hourly-ec2-trend.png" alt="Hourly EC2 usage trend" />
</div>

---

### Detailed Hourly View

The detailed heatmap grid shows **hour-by-hour costs per day**, allowing you to drill down to the most granular level of compute usage.

- Identify unexpected spikes and analyze causes.
- Spot consistent baseline workloads and right-size accordingly.

<div style={{ textAlign: 'center' }}>
  <img src="/img/hourlydashboard/hourly-ec2-detailed.png" alt="Hourly EC2 detailed view" />
</div>

---

### Save and Load Reports

You can **apply filters**, generate specific views, and **save reports** for future reference. Saved reports allow you to quickly revisit your analysis or share it with stakeholders without reapplying filters each time.

---
