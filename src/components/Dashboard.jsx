import { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function Dashboard() {

    const [transactions, setTransactions] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const addTransaction = (transaction) => {

    if (editIndex !== null) {

        const updatedTransactions = [...transactions];
        updatedTransactions[editIndex] = transaction;

        setTransactions(updatedTransactions);
        setEditIndex(null);

    } else {

        setTransactions([...transactions, transaction]);

    }
};

    const deleteTransaction = (index) => {
        setTransactions(
            transactions.filter((item, i) => i !== index)
        );
    };

    let income = 0;
let expense = 0;

transactions.forEach((item) => {

    if (item.type === "Income") {
        income += Number(item.amount);
    } else {
        expense += Number(item.amount);
    }

});

const balance = income - expense;
    return (
        <div className="container">

            <h1>Expense Tracker</h1>

            <h2>Current Balance: ₹{balance}</h2>

<div className="summary">

    <div className="card">
        <h3>Income</h3>
        <p>₹{income}</p>
    </div>

    <div className="card">
        <h3>Expense</h3>
        <p>₹{expense}</p>
    </div>

    <div className="card">
        <h3>Balance</h3>
        <p>₹{balance}</p>
    </div>

</div>

            <TransactionForm addTransaction={addTransaction} />

            <hr />

            <TransactionList
                transactions={transactions}
                deleteTransaction={deleteTransaction}
            />

        </div>
    );
}

export default Dashboard;