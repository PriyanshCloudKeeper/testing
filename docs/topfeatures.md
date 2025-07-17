---
sidebar_position: 1
title: Top Offerings
---

# Top Offerings

CloudKeeper Lens provides a suite of powerful, exclusive features designed to give you unparalleled insight and control over your AWS costs. Here are some of our top offerings that provide deep, granular visibility and actionable recommendations you won't find anywhere else.

---

### **1. Deep-Dive Data Transfer Cost Analysis**

Uncover hidden data transfer costs with our dedicated dashboard that offers deep visibility into your networking spend. [1, 11] While many tools provide high-level data transfer metrics, Lens allows you to analyze costs at a granular level — by service, region, transfer type, and even individual resources.

- **Granular Insights**: View month-on-month trends and resource-wise charges to see exactly which EC2 instances, S3 buckets, or load balancers are incurring costs.
- **Identify Hidden Spikes**: Pinpoint which regions or services are generating high inter-AZ or internet-out costs.
- **Optimize Networking Spend**: Use these detailed insights to make informed decisions about your architecture and reduce unnecessary expenses.

[**Learn More →**](./costbreakup/dt)

---

### **2. Granular Container Cost Allocation (CCA)**

For organizations running containerized workloads, our **Container Cost Allocation** dashboard provides unmatched visibility into EKS and ECS environments. Go beyond simple cluster-level costs and understand spending at the most granular levels.

- **Breakdown by Cluster & Namespace**: Analyze costs by individual clusters and Kubernetes namespaces to identify which teams or applications are driving spend.
- **Resource-Level Visibility**: See cost breakdowns by instance type, purchase type (On-Demand vs. Spot), and view CPU/Memory cost splits to find optimization opportunities.
- **Top Resource Identification**: A "Top 20 Resources" table quickly highlights the most expensive workloads, allowing for targeted optimization efforts.

[**Learn More →**](./costbreakup/cca)

---

### **3. Exclusive Data Transfer Dashboard for Deep Insights**

Our **Data Transfer Dashboard** offers the most granular and actionable view into your AWS networking spend — a capability uniquely offered in CloudKeeper Lens.

- **Comprehensive Visibility**: Analyze transfer costs by service (EC2, Kafka, etc.), type (Inter AZ, Region to Region, Internet Out), region, and resource.
- **Graph Customization**: Adjust time granularity (Daily/Monthly) and switch between chart types for more intuitive visualizations.
- **Top Contributors & Recommendations**: Identify top resources driving data transfer costs and receive optimization suggestions to reduce expenses.
- **Enterprise-Ready Exporting**: Download detailed reports showing cost and GB breakdown per resource for offline analysis and stakeholder sharing.

[**Learn More →**](./costbreakup/dt)

---

### **4. Hour-by-Hour Cost & Usage Heatmaps**

Identify peak usage times and spot anomalies with our **Hourly Dashboards**. [2] While most tools offer daily trends, Lens provides an hour-by-hour breakdown for services like Compute, S3, RDS, and Data Transfer, visualized in an intuitive heatmap.

- **Analyze Patterns**: Darker colors on the heatmap indicate higher spend, helping you visualize peak hours and baseline activity.
- **Informed Decision Making**: Use these hourly insights to plan for RI/SP purchases, understand scaling behavior, and optimize workloads that don't need to run 24/7.
- **Flexible Analysis**: View costs as Unblended, Amortized, or On-Demand Equivalent (ODE) for better financial clarity.

[**Learn More →**](./hourlydashboard/overview)

---

### **5. Advanced Cost Explorer with Granular Filtering**

Our **Cost Explorer** is the most powerful tool in Lens for deep-dive analysis. [7] It mirrors the functionality of the AWS Cost Explorer but enhances it with more detailed filtering and resource-level granularity.

- **Powerful Grouping**: Group data by over a dozen dimensions, including Service, Region, Instance Type, Tags, API Operation, and Resource ID.
- **Advanced Filtering**: Isolate costs with precision by combining multiple filters to diagnose unexpected spikes or understand cost drivers.
- **Saved Reports**: Create and save your complex, filtered views to quickly revisit and share repeatable analyses with your team.

[**Learn More →**](./costanalysis/costexplorer)

---

### **6. Actionable, Data-Driven Recommendations**

Lens acts as your personal FinOps accountant by providing **actionable recommendations** to save on infrastructure costs. [5] These suggestions are based on your actual usage data from the Cost and Usage Report (CUR).

- **Practical & Measurable**: Get tailored recommendations like moving to lower-cost instance types, removing idle network resources, or leveraging different S3 storage classes.
- **Detailed Explanations**: Each recommendation includes a "More Info" section that explains the logic, potential savings, and the specific actions you need to take.
- **Optimize with Confidence**: Validate our suggestions with your own analysis before applying them to ensure they align with your performance needs.

[**Learn More →**](./recommendations)

---

### **7. Consolidated Cross-Account Tag-Based Reporting**

For organizations managing multiple AWS accounts, our integrated **Tags Management** and **Reports** feature is indispensable. Centrally define cost allocation tags and generate consolidated reports that group resources across all your accounts.

- **Centralized Tag Management**: Define a tag key (e.g., `environment`) once and apply it to multiple MAVs (Multi-Account Views).
- **Unified Visibility**: Generate a single report that groups all resources from all selected accounts by tag value (e.g., `dev`, `prod`, `staging`).
- **Identify Untagged Resources**: Resources without the specified tag key are automatically grouped under an "Untagged" category, helping you improve your tagging hygiene.

[**Learn More →**](./preferences/tags)

---