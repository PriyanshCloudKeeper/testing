---
sidebar_position: 3
title: Budget Alerts
---

# Budget Alerts Overview

The **Budget Alerts** dashboard allows users to set alerts based on their budget thresholds, ensuring they are notified whenever costs exceed certain limits. This feature helps you keep control over your spending and avoid exceeding budgets set for various services or operations and get timely notifications on cost deviations, Reserved Instance utilization, and expiration alerts, as well as daily cost summaries.

---

### Budget Alert Configuration

- **Alert Frequency**: Choose between **Daily** or **Monthly** alerts depending on the frequency with which you want to be notified.
- **Email Notification Group(s)**: You can associate multiple **email groups** to receive notifications. 
- **Slack Channel(s)**: If you are using Slack for team communication, you can configure **Slack channels** to receive alerts.
- **Threshold**: Set the cost **threshold** for the alert to trigger.

---

### Cost Deviation Alerts

The **Cost Deviation Alerts** allow users to be notified when their AWS spending deviates significantly from the expected or forecasted budget. This feature helps users to identify and react to unexpected cost spikes early, preventing overspending.

To set up an **Cost Deviation Alerts**, you'll need to configure the following:

- **Budget Details**: This includes defining the Budget Name for the alert, and selecting the Budget Renewal Type (either Recurring Budget or Expiring Budget). **Recurring budgets** automatically reset after each period, while **Expiring budgets** stop renewing after the selected expiration date.

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-alert-config.png" alt="Budget alert configuration" />
</div>

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-threshold.png" alt="Budget threshold settings" />
</div>

- **Budget Filter**: This section lets you refine your alert based on specific AWS services or regions. This helps in narrowing down your alerts to monitor only the critical services or regions of your cloud infrastructure. For example, you can filter costs by **service** such as **EC2**, **S3**, or **Lambda**.

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-actions.png" alt="Budget alert actions" />
</div>
  
- **Budget Threshold**: ou can set a **Fixed Budget** (a set amount that you track against) or a **Relative Budget** (based on a percentage threshold that adjusts according to usage trends). This gives you flexibility in tracking your spending either with static or dynamic thresholds.

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-email.png" alt="Budget alert email settings" />
</div>

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-summary.png" alt="Budget alert summary" />
</div>

- **Alert Recipients**: You can configure the Alert Recipients by adding email groups or Slack channels to receive notifications. 

#### Example

Below, we show an example configuration for **Cost Deviation Alerts** alerts

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-list.png" alt="Budget alerts list" />
</div>

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-details.png" alt="Budget alert detailed view" />
</div>

---

### RI Expiry Alerts

RI Expiry alerts notify you when your **Reserved Instances (RIs)** are nearing their expiration. This allows you to take action on renewing or purchasing new RIs before they expire.

#### Example

The following section shows a configuration screen where users can set up alerts for Reserved Instance expiry.

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-ri-config.png" alt="Reserved Instance alert configuration" />
</div>

This screen allows you to define which email notification group or slack channel you want to send notification to.

#### Alert Frequency

The alert can be configured to notify you at the time of **expiration**, or **7**, **30**, or **60** days in advance.


<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-ri-alerts.png" alt="Reserved Instance alerts" />
</div>

---

### RI Utilization Alerts

This type of alert monitors the **utilization** of Reserved Instances. You will be alerted when the utilization of your RIs falls below a certain threshold, helping you optimize your reserved capacity.

To set up an **RI Utilization Alert**, you'll need to configure the following:

- **Utilization Threshold**: This is a percentage that defines the level of utilization you expect from your Reserved Instances. For example, if you set it to **80%**, you will be alerted if your RI utilization drops below 80%.
  
- **Service Type**: You can specify which AWS services the alert should monitor. This could be EC2 (Elastic Compute Cloud), RDS (Relational Database Service), ElastiCache, Redshift, or others. This helps ensure that you’re tracking the RI utilization of the relevant services.

- **Period**: Choose whether you want to be alerted on a **daily** or **monthly** basis, depending on how often you need to be notified about your utilization status.

#### Example

Below, we show an example configuration for **RI Utilization** alerts, allowing users to set thresholds for when RI utilization is low.

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-ri-usage.png" alt="Reserved Instance usage alerts" />
</div>

---

### Daily Summary Report Alerts

These alerts provide a **daily cost summary** of your AWS spending, helping you stay informed about the daily breakdown of your cloud costs. You can configure this to be sent via email or Slack.

#### Example

Here is an example configuration screen for setting up **Daily Summary Report** alerts, which helps you track daily spending trends.

<div style={{ textAlign: 'center' }}>
  <img src="/img/notifications/notifications-budget-dashboard.png" alt="Budget alerts dashboard" />
</div>

The Daily Summary Report can be configured to be sent to specific **email recipients** or **Slack channels**.

