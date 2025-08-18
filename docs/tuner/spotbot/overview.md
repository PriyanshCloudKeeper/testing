---
sidebar_position: 1
title: SpotBot
---

import React from 'react';

# SpotBot (ECS Fargate)

The **SpotBot** feature in CloudKeeper Tuner helps you automate cost savings on **ECS Fargate workloads** by intelligently enabling **Spot Instances** with a 1:2 ratio to On-Demand tasks.  
It provides visibility into current usage, potential savings, and allows you to enable/disable SpotBot at the cluster or task level.

---

## SpotBot Dashboard Overview

The SpotBot dashboard offers a high-level summary of SpotBot coverage, costs, and savings insights across your ECS environment:

- **Total Clusters**: Number of ECS clusters detected.
- **Spot Enabled Services**: How many services are running Spot Tasks.
- **Total Spend**: Current forecasted spend for ECS workloads.
- **Potential Savings**: Monthly savings you could realize by shifting to Spot.
- **Savings Achieved**: How much you’ve saved already, both this month and lifetime.

<div style={{ textAlign: 'center' }}>
  <img src="/img/spotbot/overview-dashboard.png" alt="SpotBot summary dashboard with metrics for clusters, services, spend, and savings" />
</div>

---

## Savings Insight

Below the metrics summary, the **Savings Insight** graph provides a daily breakdown of:

- **Savings Achieved** (Green)
- **Spot Spend** (Purple)
- **On-Demand Spend** (Blue)

This helps you track your usage trends and the impact of enabling SpotBot over time.

<div style={{ textAlign: 'center' }}>
  <img src="/img/spotbot/savings-insight.png" alt="Bar graph showing daily breakdown of savings, Spot, and On-Demand costs" />
</div>

---

## Cluster-Level Details

Each row in the SpotBot table displays:

- **Account ID**: The AWS account owning the cluster.
- **Cluster Name/ID**: ECS Cluster identifier.
- **Region**: AWS region.
- **Potential Savings**: Monthly savings opportunity for this cluster.
- **SpotBot Status**: Number of services within the cluster using Spot.

You can also filter clusters by region using the region dropdown.

<div style={{ textAlign: 'center' }}>
  <img src="/img/spotbot/cluster-level-summary.png" alt="SpotBot cluster-level summary showing account, region, and SpotBot coverage" />
</div>

---

## Service-Level Configuration

Expanding a cluster reveals all associated ECS services. For each service, you’ll see:

- **Service ID**
- **Total Tasks**
- **On-Demand vs Spot Task Count**
- **Potential Savings**
- **Enable/Disable SpotBot Toggle**

This lets you quickly switch individual services to use Spot where appropriate.

<div style={{ textAlign: 'center' }}>
  <img src="/img/spotbot/service-level-toggle.png" alt="Expanded view of ECS services with SpotBot toggle and task breakdown" />
</div>

---

## Key Benefits

- **Automated Cost Optimization**: SpotBot seamlessly switches eligible services to Spot instances.
- **Visibility**: Easily identify clusters and services with Spot savings potential.
- **Control**: Enable or disable SpotBot at any level — cluster or service.
- **Insights**: Visualize historical performance and savings data to guide decisions.

---

