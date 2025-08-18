---
sidebar_position: 1
title: Scheduler
---

import React from 'react';

# Scheduler

The **Scheduler** feature in CloudKeeper Tuner enables you to optimize AWS resource usage by controlling when non-production resources are powered on and off.  
This capability is crucial for reducing unnecessary cloud spend, especially in environments where 24/7 uptime is not required.

---

## What the Scheduler Dashboard Shows

The Scheduler dashboard presents an at-a-glance view of your resource-level coverage and cost impact.

### Key Metrics:

- **Scheduler Coverage**: Displays how many eligible resources have an active schedule applied out of the total scanned.
- **Total Spend**: The projected spend for the current month based on current usage trends.
- **Savings Achieved**: Shows both month-to-date and lifetime savings from scheduling.
- **Potential Savings**: Indicates additional savings that can be achieved by scheduling the remaining eligible resources.

<div style={{ textAlign: 'center' }}>
  <img src="/img/scheduler/overview.png" alt="Scheduler coverage, spend, savings, and potential savings for ECS resources" />
</div>

---

## Savings and Spend Analysis

Below the header metrics, a **bar graph** displays daily spend and savings data over time.  
This visual helps track trends and identify scheduling impact on your overall cloud bill.

<div style={{ textAlign: 'center' }}>
  <img src="/img/scheduler/graph-ecs.png" alt="Bar graph showing daily spend and savings trends for ECS scheduling" />
</div>

---

## Resource List & Scheduler Controls

The **resource table** shows all eligible instances for scheduling along with their account ID, region, and resource ID.

You can:

- Select one or multiple resources.
- Use the **Actions dropdown** to:
  - **Enable Scheduler**
  - **Disable Scheduler**
  - **Configure Scheduler**

<div style={{ textAlign: 'center' }}>
  <img src="/img/scheduler/resource-table-actions-1.png" alt="Resource table with scheduler actions like enable, disable, and configure" />
</div>

<div style={{ textAlign: 'center' }}>
  <img src="/img/scheduler/resource-table-actions-2.png" alt="Resource table with scheduler actions like enable, disable, and configure" />
</div>

---

## Scheduler Configuration Modal

Upon clicking “Configure,” a modal allows you to define:

- **Start/Stop times**
- **Timezone**
- **Day selection** (Every Day, Weekdays, Custom)

This provides full flexibility to schedule resources according to business hours or other operational requirements.

<div style={{ textAlign: 'center' }}>
  <img src="/img/scheduler/config-modal.png" alt="Scheduler configuration modal with time and day selection options" />
</div>

---

## Multi-Service Support

Scheduler also supports:

- **EC2 (Elastic Container Cloud)**
- **ASG (Auto Scaling Groups)**
- **RDS (Relational Database Service)**
- **Redshift**
- **SageMaker**

Each service has its own tab in the dashboard with the same layout:  
**Metrics, spend analysis, and configurable resource table**.

<div style={{ textAlign: 'center' }}>
  <img src="/img/scheduler/ec2-tab.png" alt="ECS tab showing scheduler coverage, spend, savings, and list of ECS services" />
</div>

---
