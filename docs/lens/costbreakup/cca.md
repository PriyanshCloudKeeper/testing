---
sidebar_position: 3
title: Container Cost Allocation
---

# Container Cost Allocation

The **Container Cost Allocation** dashboard in Cost Breakup provides deep visibility into containerized workloads running on **EKS**, **ECS**, and other orchestrated environments. It helps you analyze costs at granular levels — by cluster, namespace, region, instance type, and more — so you can manage container costs efficiently and optimize resource usage.

---

## Overview & Key Metrics

At the top of the dashboard, you’ll see high-level metrics showing:

- Total costs over the last 3 months with month-over-month trends.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cost-monthly-trend.png" alt="Container cost monthly trend showing cost over the last 3 months" />
</div>

- Total **CPU Cost** and **Memory Cost**, split into **Used** and **Unused**. This highlights potential optimization opportunities.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cpu-memory-cost-split.png" alt="Container CPU and Memory cost split between used and unused resources" />
</div>

- Number of **Clusters**, **Nodes**, and **Pods** (or Tasks for ECS).
- Actionable recommendations to further reduce container costs (e.g., by upgrading EKS versions).

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cluster-metrics-recommendations.png" alt="Container metrics showing clusters, nodes, pods and cost recommendations" />
</div>

---

## Cluster and Namespace Views

### Cost by Cluster

Displays a stacked bar chart showing month-on-month costs distributed across clusters. Helps you understand which clusters are contributing most to the spend.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cost-by-cluster.png" alt="Cost breakdown by container clusters" />
</div>

### Cost by Namespace

Breaks down the cost further into Kubernetes namespaces, useful for identifying workloads or environments (e.g., dev, prod) with high costs.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cost-by-namespace.png" alt="Cost breakdown by Kubernetes namespaces" />
</div>

---

## Additional Views

### Cost by Region

Shows container costs split by AWS regions (e.g., Mumbai, Sao Paulo). Useful for regional optimization and understanding global footprint.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cost-by-region.png" alt="Container costs split by AWS regions" />
</div>

### Cost by Instance Type

Displays how much each instance type (e.g., c6i.2xlarge, c6a.8xlarge) contributes to overall container costs. Helps with right-sizing and purchase strategy.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cost-by-instance-type.png" alt="Container costs by instance types" />
</div>

### Cost by Purchase Type

Breaks down costs by On-Demand, Savings Plans, and Spot. This helps you analyze how much you are saving and where to optimize further.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-cost-by-namespace.png" alt="Cost breakdown by Kubernetes namespaces" />
</div>

---

## Top 20 Resources Table

Below the charts, a detailed table lists the **Top 20 resources** contributing to container costs. This includes:

- Cluster Name, Namespace, Region
- Node Instance Type, Purchase Option
- Used CPU Cost & Memory Cost
- Unused CPU Cost & Memory Cost
- Total Cost per resource

This helps identify specific workloads or nodes that might be overspending.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-top20-resources.png" alt="Top 20 container resources by cost" />
</div>

---

## ECS and Explorer Views

### ECS

Similar cost breakdown is available for ECS clusters and tasks, though data may vary depending on your environment. When there is no ECS data, the graphs and metrics appear empty.

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-ecs-cost-breakdown.png" alt="ECS clusters and tasks cost breakdown" />
</div>

### Explorer

The **Explorer** tab provides advanced grouping and filtering options. You can group costs by:

- Region
- Account ID
- Instance Type or Type Family
- Instance ID
- Purchase Type
- Cluster Name
- And more

You can also use detailed filters on the right side to drill down into specific clusters, instance types, or other dimensions. 

Time granularity options allow you to switch between **Daily** and **Monthly** views, and toggle between different chart styles (bar, stack, line).

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-explorer-view.png" alt="Container cost explorer view with grouping options" />
</div>

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/cca/container-explorer-detailed-view.png" alt="Detailed container cost explorer view with filters" />
</div>

---

## Downloadable Report

All data tables and charts can be exported to Excel for deeper offline analysis and sharing with stakeholders.

---

