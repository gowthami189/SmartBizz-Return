import React from 'react';
import './invoicelist.css'; // Make sure to style your invoice list component

const InvoiceList = ({ invoices }) => {
    return (
        <div className="invoice-list-container">
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
        </div>
    );
};

export default InvoiceList;
