---
title: CK Extension (Tuner)
---

import React from 'react';

The **CloudKeeper Tuner Extension** is a powerful browser extension that integrates directly into the **AWS Console**.  
It enables users to view **Tuner-generated recommendations** without leaving the AWS environment, eliminating the need to switch between multiple platforms.

---

## Overview: CK Extension

One of the standout features of Tuner is the **CK Extension**.  
Designed for seamless integration, this extension displays key cost optimization insights directly within the AWS Console, providing:

- Quick access to recommendations without switching tabs.
- Integrated cost insights such as Potential Savings, Savings Achieved, and more.
- Direct actions through features like Auto Remediation and Snooze.

### Screenshot: CK Extension in AWS Console

<div style={{ textAlign: 'center' }}>
  <img src="/img/billingsummary/billing-summary-overview.png" alt="Billing summary overview dashboard" />
</div>

---

## Recommendations Dashboard

The **Recommendations Dashboard** offers a comprehensive overview of cost optimization opportunities. It provides:

- Projected Spend (Total Spend): Forecasts future AWS expenses.
- Potential Savings: Shows monthly savings achievable through optimizations.
- Savings Achieved: Displays the total savings already realized.
- Resources Scanned: Indicates the number of AWS resources analyzed.
- Total Recommendations: Number of actionable insights detected.

This dashboard helps identify inefficiencies, prioritize actions, and ensure better financial governance.

### Screenshot: Recommendations Dashboard

<div style={{ textAlign: 'center' }}>
  <img src="/img/billingsummary/billing-summary-overview.png" alt="Billing summary overview dashboard" />
</div>


---

## Recommendation Categories

Recommendations are divided into three main categories:

### Cleaner Recommendations
- Identifies unused or zombie resources (e.g., idle EC2 instances, unused ELBs).
- Offers quick savings through easy cleanup actions.

**Key Features:**
- Auto Remediation: Automatically remediate flagged resources directly from the dashboard.
- Snooze Option: Temporarily hide recommendations you want to defer.

---

### Over-Provisioned Recommendations
- Targets resources with low utilization, suggesting downsizing for efficiency.
- Example: An underutilized EC2 instance recommended to be resized from `r5a.8xlarge` to `r5a.4xlarge`.

**Additional Feature:**
- Snooze Option is also available here for deferred actions.

---

### Modernization Recommendations
- Flags outdated resources for upgrades to modern and cost-effective alternatives.
- Example: Suggesting an upgrade from `gp2` to `gp3` for EBS volumes.

---

## Scheduler Feature

Tuner’s Scheduler allows you to set start/stop schedules for non-production resources, ensuring they only run during required hours.  
This minimizes unnecessary spend by automating resource management.

- Configure schedules directly in the AWS Console.
- Customize timings per resource.
- Great for non-production environments.

---

## SpotBot

The SpotBot feature optimizes the usage of AWS Spot Instances, helping further reduce costs through automation and recommendations.

---

## Accounts Onboarding

To onboard your AWS accounts to Tuner:

1. Navigate to the Accounts Section and click Link Account.
2. Choose account type (Non-Prod or Prod).
3. Select the features to enable (Recommendations, Scheduler, SpotBot).
4. Choose onboarding method:
   - Automated: Deploy a CloudFormation template.
   - Manual: Follow the provided step-by-step guide.

Once onboarded, the system scans all resources (approximately 24 hours) and displays detailed insights per account.

---

## Preferences

Users can configure preferences to tailor the recommendations, scheduling, and SpotBot behavior as per their organization’s needs.

---

## CK Extension Detailed View

Within the AWS Console, you can view a quick overview of your savings and recommendations.  
By clicking the expand button, you can switch to the full Tuner view for more granular insights.

### Screenshot: Expanded Tuner View

<div style={{ textAlign: 'center' }}>
  <img src="/img/billingsummary/billing-summary-overview.png" alt="Billing summary overview dashboard" />
</div>

