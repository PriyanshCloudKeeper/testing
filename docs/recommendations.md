---
sidebar_position: 1
title: Recommendations
---

# Recommendations

The **Recommendations** dashboard acts as a **personal accountant**, offering actionable ways for customers to save on infrastructure costs.

import Admonition from '@theme/Admonition';

<Admonition type="note" title="Note">
  These recommendations are based on CUR (Cost and Usage Report) data and best practices.
  They do not take into account real-time metrics, such as actual usage or dynamic resource allocation.
  Make sure to validate and analyze your actual resource utilization before applying any recommendations.
</Admonition>


---

### Cost Optimization Best Practices

- Provides **best practices** for cost optimization tailored to each customer's unique usage patterns.
- Lens suggests practical steps to reduce costs without compromising performance.

---

### Example Recommendations

#### Move to Lower Cost Instances

- Lens provides **service-wise, resource-level data** highlighting where customers can switch to lower-cost instances.
- These recommendations ensure cost savings while maintaining or even improving performance.
- Additional details are provided when clicking on **"More Info"**, explaining how the savings are calculated and the criteria used for this recommendation.

#### Remove Idle Network Resources

- Lens identifies **idle resources**, such as Load Balancers or NAT Gateways, recommending their removal to avoid unnecessary costs.
- Detailed recommendations include suggested actions, and users can see how much they can save by taking action.

---

### Additional Recommendations

Beyond the above examples, Lens offers further tailored recommendations designed to help customers continually optimize and control their AWS spending.

---

<div style={{ textAlign: 'center' }}>
  <img src="/img/recommendations/recommendations-overview-dashboard.png" alt="Recommendations overview dashboard" />
</div>

You can click on any recommendation to open a detailed view that explains the logic, savings breakdown, and specific actions you can take.

---

##### How to get more details

When you click **More Info** on a specific recommendation, it provides a detailed breakdown, including:

1. **Savings Estimate**: Shows the potential savings after applying the recommendation (e.g., savings per month, year).
2. **Explanation & Actions**:  A description of what the recommendation entails, along with suggested actions you can take to apply it effectively.
3. **Criteria**: Explains the criteria used to generate the recommendation. For instance, in EC2 optimizations, it includes whether only On-Demand instances are considered and if the recommended instance type offers higher performance and lower cost.

---

#### Example: EC2 Instance Optimization

<div style={{ textAlign: 'center' }}>
  <img src="/img/recommendations/recommendations-ec2-overview.png" alt="Recommendations EC2" />
</div>
<br></br>
<div style={{ textAlign: 'center' }}>
  <img src="/img/recommendations/recommendations-ec2-moreinfo.png" alt="Recommendations EC2" />
</div>

This recommendation analyzes your cost and usage report for On-Demand EC2 instances that can be migrated to the latest generation instance types. Using the **current generation of EC2 instances** instead of the previous generation has multiple advantages, such as:

- Better hardware performance (faster CPUs)
- Increased memory and network throughput
- Better virtualization technology (HVM)
- Lower costs

The recommendations below are for EC2 instances that meet the following criteria:

- Only **On-Demand** instances are covered in the recommendations.
- Instances running continuously since the start of the current month are included, while instances used for only a few hours are excluded.
- The recommended instance types are of the same or better configuration than the current instance type but at a lower cost.

**Action(s) you need to take:**

- Review the mentioned workloads, analyze resource level utilization, and choose the right instance type.
- If your application is running on a legacy operating system or application server, you may need to rebuild the workload from scratch to leverage the latest generation instance types.

---

#### Example: S3 Storage Optimization

<div style={{ textAlign: 'center' }}>
  <img src="/img/recommendations/recommendations-s3-moreinfo.png" alt="Recommendations S3" />
</div>
<br></br>
<div style={{ textAlign: 'center' }}>
  <img src="/img/recommendations/recommendations-s3-moreinfoc.png" alt="Recommendations S3" />
</div>

In this recommendation, we analyze the S3 buckets that are only using **"Standard Storage Class"** from the CUR report. Here are some tips on optimizing S3 storage costs:

- **S3 Standard**: Used for frequently accessed data.
- **S3 Intelligent Tiering**: Helps automatically move storage costs to the most cost-effective access tier.
- **S3 Glacier**: Low-cost storage for archival data.
- **S3 Deep Archive**: Lowest-cost option for rarely accessed data.

**Action(s) you need to take:**

- Analyze your storage requirements and access patterns on each S3 bucket.
- Review the lifecycle transition considerations and move data to cheaper storage classes like **Glacier** or **Deep Archive** if appropriate.

---
