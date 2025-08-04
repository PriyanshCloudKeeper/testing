---
sidebar_position: 3
title: Over-Provisioned Recommendations
---

import React from 'react';

# Over-Provisioned Recommendations

The **Over-Provisioned Recommendations** section identifies **resources that are larger than necessary** for their workloads.  
By right-sizing these resources, you can significantly reduce AWS costs while maintaining optimal performance.

---

## Overview of Over-Provisioned Recommendations

This section groups recommendations by service and highlights:

- **Potential Savings** from downsizing over-provisioned resources.
- **Number of Recommendations** for each service.
- Actions to **Downsize** instances or **Snooze** for later review.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/overprovisioned-overview.png" alt="Over-Provisioned recommendations overview with potential savings and resource counts" />
</div>

---

## EC2 Over-Provisioned Recommendations

For EC2 instances, CloudKeeper Tuner analyzes usage patterns over several months to detect underutilized resources.  
The dashboard shows:

- **Account ID**, **Resource ID**, and **Region** for easy identification.
- **CPU and Memory Utilization** statistics over the last several months.
- Suggested **downsizing actions** (e.g., "Downsize instance from r5a.8xlarge to r5a.4xlarge").
- Estimated **Potential Savings** from right-sizing.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tunerrecommend/overprovisioned-ec2-details.png" alt="Detailed EC2 over-provisioned recommendations with usage stats and downsizing actions" />
</div>

---

## Additional Features

- **Auto Remediation**: Apply the suggested downsizing action directly.
- **Snooze Option**: Postpone actions on specific recommendations until they are ready to be implemented.
- **Detailed Insights**: Each recommendation includes a utilization history, ensuring decisions are based on actual usage patterns.

---

The Over-Provisioned Recommendations help ensure that your AWS resources are **right-sized to match their workload**, eliminating unnecessary expenses while keeping performance stable.
