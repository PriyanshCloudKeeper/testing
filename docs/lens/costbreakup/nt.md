---
sidebar_position: 4
title: Networking & Content Delivery
---

# Networking & Content Delivery

The **Networking & Content Delivery** dashboard in Cost Breakup provides a detailed breakdown of costs associated with AWS services like **API Gateway** and **CloudFront**. It helps you analyze request volumes and corresponding costs at a granular resource level.

---

## API Gateway and CloudFront Tabs

At the top, you can switch between **API Gateway** and **CloudFront** to analyze each service separately.

---

## Table View

This section presents a detailed table displaying costs and usage metrics for each resource. The columns include:

- **Account ID**: The AWS account associated with the resource.
- **Resource ID**: Unique identifier for each API Gateway or CloudFront resource.
- **Region**: AWS region where the resource is hosted (e.g., Asia Pacific - Mumbai).

#### Requests

- **Quantity (Requests)**: Total number of requests processed by the resource.
- **Cost**: Cost incurred for these requests.

#### HTTP Request

- **Quantity (Requests)**: Total HTTP requests (if applicable).
- **Cost**: Cost associated with HTTP requests.

#### Others

- **Cost**: Any additional miscellaneous costs not directly classified under requests or HTTP requests.

#### Total Cost

- Aggregated cost for each resource, combining requests, HTTP requests, and other components.

---

<div style={{ textAlign: 'center' }}>
  <img src="/img/costbreakup/network/networking-content-delivery-dashboard.png" alt="Networking and Content Delivery dashboard showing API Gateway and CloudFront costs" />
</div>

## Time Frame and Download

On the top-right, you can select the **month** to view historical data and trends. Additionally, there is an option to **download** the full dataset as an Excel report for offline analysis or sharing.

---
