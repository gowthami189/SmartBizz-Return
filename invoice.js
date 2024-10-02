import React, { useState } from 'react';
import './invoice.css'; // Make sure to style your invoice component

const Invoice = () => {
    const [invoices, setInvoices] = useState([]);
    const [newInvoice, setNewInvoice] = useState({
        invoiceNumber: '',
        date: '',
        client: '',
        amount: '',
        status: 'Pending',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewInvoice({ ...newInvoice, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newInvoice.invoiceNumber && newInvoice.client && newInvoice.amount) {
            setInvoices([...invoices, newInvoice]);
            setNewInvoice({ invoiceNumber: '', date: '', client: '', amount: '', status: 'Pending' });
        }
    };

    return (
        <div className="invoice-container">
            <h1>Manage Invoices</h1>

            {/* Create Invoice Form */}
            <form onSubmit={handleSubmit} className="invoice-form">
                <h2>Create New Invoice</h2>
                <input
                    type="text"
                    name="invoiceNumber"
                    placeholder="Invoice Number"
                    value={newInvoice.invoiceNumber}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={newInvoice.date}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="client"
                    placeholder="Client Name"
                    value={newInvoice.client}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={newInvoice.amount}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn">Add Invoice</button>
            </form>

            {/* Invoices List */}
            <section className="invoice-list-section">
                <h2>Invoices List</h2>
                {invoices.length === 0 ? (
                    <p>No invoices found.</p>
                ) : (
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
                            {invoices.map((invoice, index) => (
                                <tr key={index}>
                                    <td>{invoice.invoiceNumber}</td>
                                    <td>{invoice.date || 'Not Specified'}</td>
                                    <td>{invoice.client}</td>
                                    <td>${invoice.amount}</td>
                                    <td>{invoice.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}

export default Invoice;
