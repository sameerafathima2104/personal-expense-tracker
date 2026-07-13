import { useState, useEffect } from "react";

function TransactionForm({ addTransaction, editTransaction }) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Expense");

    useEffect(() => {
        if (editTransaction) {
            setTitle(editTransaction.title);
            setAmount(editTransaction.amount);
            setType(editTransaction.type);
        }
    }, [editTransaction]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" || amount === "") {
            alert("Please fill all fields");
            return;
        }

        addTransaction({
            title,
            amount,
            type
        });

        setTitle("");
        setAmount("");
        setType("Expense");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <br /><br />

            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option>Income</option>
                <option>Expense</option>
            </select>

            <br /><br />

            <button type="submit">
                {editTransaction ? "Update Transaction" : "Add Transaction"}
            </button>

        </form>
    );
}

export default TransactionForm;