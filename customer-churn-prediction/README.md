# TELCO CUSTOMER CHURN PREDICTION
What is a *customer churn?* - it is when a customer decides to leave or stop using the company's services or products.

What are the possible causes of customer churn?
* Wrong target audience.
* Bad customer support.
* Better services and products from another competitor.
* Product and services issues.
* Improper pricing.

To reduce customer churn, it is ideal for telecom companies to predict which customers have a high probability of leaving. The company will then create solutions or offers to that customer to reduce the risk of churn.

## DATASET
https://www.kaggle.com/datasets/blastchar/telco-customer-churn/data

The data set includes information about:

* Customers who left within the last month – the column is called Churn.
* Services that each customer has signed up for – phone, multiple lines, internet, online security, online backup, device protection, tech support, and streaming TV and movies.
* Customer account information – how long they’ve been a customer, contract, payment method, paperless billing, monthly charges, and total charges
* Demographic info about customers – gender, age range, and if they have partners and dependents.

The raw data contains 7043 rows (customers) and 21 columns (features).

The “Churn” column is our target.

## OBJECTIVES:
- Determine what customer attributes are associated with churn.
- Plot the customer attributes for analysis.
- Use logistic regression and naive bayes model for training and testing.
- Determine which model gives more recall percentage.

## KEY FINDINGS
* Most churned customers left within the first 15 months. which indicates most churned customers left early while long time customers tend to stay.
* Customers on low-cost plans ($20-30/month) are much more likely to stay, while churners are overrepresented at higher monthly charges (~$70-110).
* Churned customers have very low total charges, but this mostly reflects their short tenure (they were billed for only a short time).

## RESULTS

| Model | Accuracy | Precision | Recall | F1-Score | ROC-AUC |
|---|---:|---:|---:|---:|---:|
| Logistic Regression | 0.73 | 0.50 | 0.79 | 0.61 | 0.83 |
| Naive Bayes | 0.68 | 0.45 | 0.85 | 0.59 | 0.81 |

Accuracy is misleading here because most customers stay, so the focus is on recall and F1 for the churn class. Logistic regression is recommended for its best F1, higher ROC-AUC, and interpretability. Naive Bayes catches more churners but produces more false alarms.

## HOW TO RUN
```bash
git clone https://github.com/Albertt-Carlsonn/customer-churn-prediction.git
cd customer-churn-prediction
pip install -r requirements.txt
jupyter notebook churn.ipynb
```
Download the dataset from the Kaggle link above and place the CSV in the same folder as the notebook.
