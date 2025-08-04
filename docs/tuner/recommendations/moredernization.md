---
sidebar_position: 4
title: Modernization Recommendations
---

import React from 'react';

# Modernization Recommendations

The **Modernization Recommendations** section highlights **resources running on outdated or legacy infrastructure**.  
Upgrading these resources to modern alternatives improves performance, reliability, and cost efficiency.

---

## Overview of Modernization Recommendations

This section groups recommendations by service and displays:

- **Potential Savings** gained from upgrading outdated resources.
- **Number of Recommendations** available for modernization.
- Suggested **upgrade actions** (e.g., upgrading storage volumes, changing instance types).

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/modernization-overview.png" alt="Modernization recommendations overview with potential savings and resource counts" />
</div>

---

## Example: RDS Modernization

For Amazon RDS, the dashboard identifies instances using older generation types or configurations.  
Recommendations may include:

- **Changing instance families** to newer, more cost-effective types.  
- Upgrading configurations for improved throughput and lower cost.  
- Viewing detailed metrics like CPU/Memory utilization to validate modernization needs.

Each recommendation shows:

- **Account ID**, **Resource ID**, and **Region**.
- **Potential Savings** achievable after modernization.
- **Action** to apply the upgrade (e.g., "Change Instance from db.m6g.8xlarge to db.r6g.4xlarge").

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/modernization-rds-details.png" alt="Detailed modernization recommendations for RDS instances" />
</div>

---

## Other Modernization Examples

- **EBS Volumes**: Recommendations to upgrade from gp2 to gp3 for better performance and reduced costs.
- **Legacy Services**: Alerts for outdated services requiring upgrades to modern versions.

---

## Key Features

- **Actionable Upgrades**: Each recommendation provides clear actions to modernize infrastructure.
- **Auto Remediation**: Apply recommended upgrades directly from the dashboard.
- **Snooze Option**: Defer modernization actions and review them later in the Snoozed List.

---

Modernization Recommendations ensure your AWS infrastructure remains **efficient, cost-effective, and aligned with the latest best practices**.
