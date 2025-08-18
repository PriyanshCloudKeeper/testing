---
sidebar_position: 1
title: Accounts
---

import React from 'react';

# Accounts

The **Accounts** page provides a centralized view of all AWS accounts onboarded into CloudKeeper Tuner. It helps identify which accounts are linked and which are not, allowing users to manage feature access, onboarding status, and remediation settings from a single dashboard.

---

## Linked vs Unlinked Accounts

Each row in the table represents an AWS account with the following details:

- **Account ID and Name** (e.g., Thunderstrike, Sentinel)
- **Account Type** (e.g., Production or Non-Production)
- **Status**: Indicates if the account is verified and actively linked.
- **Auto Remediation Status**: Shows whether the auto remediation setup is updated.
- **Scheduler Toggle**: Allows enabling/disabling scheduler at the account level.
- **Access Type**: Indicates available features — Recommendations, Scheduler, SpotBot.
- **Actions**: Link or manage the account as needed.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tuneraccounts/accounts-table.png" alt="Accounts table showing onboarded accounts, statuses, and feature access types" />
</div>

---

## Account Linking Status

At the top of the page or in other relevant modules, you’ll also see a quick summary showing how many accounts have been linked out of the total configured accounts.  
If not all accounts are linked, users can click on the **"Link Account"** button to complete onboarding.

<div style={{ textAlign: 'center' }}>
  <img src="/img/tuneraccounts/link-status-popup.png" alt="Account linking status indicator and action button" />
</div>

---

## Why Account Linking Matters

Only **linked and verified accounts** are eligible for:

- Receiving cost-saving recommendations
- Enabling auto-remediation features
- Utilizing advanced tools like Scheduler and SpotBot

---

Ensure all accounts are onboarded to unlock the full value of CloudKeeper Tuner.

