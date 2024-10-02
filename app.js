import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Invoice from './components/invoice';
import './App.css'; // Import global styles if needed

const App = () => {
    const [invoices, setInvoices] = useState([]);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>SmartBizz Return</h1>
                <nav>
                    <ul>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#invoices">Invoices</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main content */}
            <main>
                <section id="dashboard">
                    <Dashboard />
                </section>

                <section id="invoices">
                    <Invoice invoices={invoices} setInvoices={setInvoices} />
                </section>
            </main>

            <footer className="app-footer">
                <p>&copy; 2024 SmartBizz. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
