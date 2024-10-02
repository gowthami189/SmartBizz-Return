import React from 'react';
import './dashboard.css'; // Make sure to style your dashboard

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to SmartBizz Dashboard</h1>
            
            {/* Overview Section */}
            <section className="overview-section">
                <h2>Business Overview</h2>
                <div className="overview-cards">
                    <div className="card">
                        <h3>Total Invoices</h3>
                        <p>150</p> {/* Placeholder for data */}
                    </div>
                    <div className="card">
                        <h3>Pending Payments</h3>
                        <p>$12,000</p> {/* Placeholder for data */}
                    </div>
                    <div className="card">
                        <h3>Inventory Status</h3>
                        <p>In Stock: 85%</p> {/* Placeholder for data */}
                    </div>
                    <div className="card">
                        <h3>GST Filed</h3>
                        <p>July 2024</p> {/* Placeholder for data */}
                    </div>
                </div>
            </section>

            {/* B2B Invoices Section */}
            <section className="invoices-section">
                <h2>B2B Invoices</h2>
                <button className="btn">Create New Invoice</button>
                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th>Invoice #</th>
                            <th>Date</th>
                            <th>Client</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-001</td>
                            <td>02/10/2024</td>
                            <td>XYZ Pvt. Ltd.</td>
                            <td>$3,000</td>
                            <td>Paid</td>
                        </tr>
                        <tr>
                            <td>INV-002</td>
                            <td>05/10/2024</td>
                            <td>ABC Corp.</td>
                            <td>$5,500</td>
                            <td>Pending</td>
                        </tr>
                        {/* More rows can be added here */}
                    </tbody>
                </table>
            </section>

            {/* GST Integration Section */}
            <section className="gst-section">
                <h2>GST Integration</h2>
                <p>Next GST Filing Due: 15th October 2024</p>
                <button className="btn">File GST Now</button>
            </section>

            {/* Inventory Management Section */}
            <section className="inventory-section">
                <h2>Inventory Management</h2>
                <button className="btn">Update Inventory</button>
                <p>Stock Levels: 85%</p>
            </section>

            {/* Payment Tracking Section */}
            <section className="payments-section">
                <h2>Payment Tracking</h2>
                <button className="btn">View All Payments</button>
                <p>Last Payment Received: $1,200 on 01/10/2024</p>
            </section>
        </div>
    );
}

export default Dashboard;
