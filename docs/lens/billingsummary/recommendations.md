---
sidebar_position: 3
title: Recommendations
---

### Recommendations

import React from 'react';

<div style={{ textAlign: 'center' }}>
  <img src="/img/billingsummary/billing-summary-cost-trend.png" alt="Billing summary cost trend" />
</div>

This section provides tailored, data-driven suggestions for optimizing your AWS costs:

- **Move to Lower-Cost Instances**: Identifies services or instances that can be switched to more cost-effective options, ensuring performance while reducing costs.
- **Remove Idle Network Resources**: Suggests deleting unused resources, such as Load Balancers or NAT Gateways, to avoid unnecessary spending.
- **Leverage Different Storage Classes**: Recommendations for using alternative storage tiers, like S3 Glacier, to optimize costs related to data storage.
- **Upgrade Version to Remove Extended Support Costs**: Helps you identify and upgrade legacy versions of services that are incurring extended support costs.

import Admonition from '@theme/Admonition';

<Admonition type="note" title="Note">
  These recommendations are based on CUR (Cost and Usage Report) data and best practices.
  They do not take into account real-time metrics, such as actual usage or dynamic resource allocation.
  Make sure to validate and analyze your actual resource utilization before applying any recommendations.
</Admonition>

