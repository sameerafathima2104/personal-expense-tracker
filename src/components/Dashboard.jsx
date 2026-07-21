import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function Dashboard() {

    const [transactions, setTransactions] = useState([]);
    const [editTransaction, setEditTransaction] = useState(null);


   useEffect(() => {

    fetch("http://localhost:5000/api/transactions", {

        headers: {

            Authorization: `Bearer ${localStorage.getItem("token")}`

        }

    })

        .then((response) => response.json())

        .then((data) => {
            setTransactions(data);
        })

        .catch((error) => {
            console.error("Error fetching transactions:", error);
        });

}, []);


    const addTransaction = async (transaction) => {

        try {

            const response = await fetch(
                "http://localhost:5000/api/transactions",
                {
                    method: "POST",

                    headers: {

    "Content-Type": "application/json",

    Authorization: `Bearer ${localStorage.getItem("token")}`

},

                    body: JSON.stringify(transaction)
                }
            );

            const savedTransaction = await response.json();

            setTransactions([
                savedTransaction,
                ...transactions
            ]);

        } catch (error) {

            console.error(
                "Error adding transaction:",
                error
            );

        }

    };


    const deleteTransaction = async (id) => {

        try {

            await fetch(
                `http://localhost:5000/api/transactions/${id}`,
                {
                method: "DELETE",

headers: {

    Authorization: `Bearer ${localStorage.getItem("token")}`

}
                }
            );

            setTransactions(
                transactions.filter((item) => item._id !== id)
            );

        } catch (error) {

            console.error(
                "Error deleting transaction:",
                error
            );

        }

    };


    const updateTransaction = async (updatedData) => {

        try {

            const response = await fetch(

                `http://localhost:5000/api/transactions/${editTransaction._id}`,

                {
                    method: "PUT",

                   headers: {

    "Content-Type": "application/json",

    Authorization: `Bearer ${localStorage.getItem("token")}`

},

                    body: JSON.stringify(updatedData)
                }

            );

            const updatedTransaction = await response.json();


            setTransactions(

                transactions.map((item) =>

                    item._id === updatedTransaction._id

                        ? updatedTransaction

                        : item

                )

            );


            setEditTransaction(null);


        } catch (error) {

            console.error(
                "Error updating transaction:",
                error
            );

        }

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


            <TransactionForm

                addTransaction={

                    editTransaction

                        ? updateTransaction

                        : addTransaction

                }

                editTransaction={editTransaction}

            />


            <hr />


            <TransactionList

                transactions={transactions}

                deleteTransaction={deleteTransaction}

                editTransaction={setEditTransaction}

            />

        </div>

    );

}


export default Dashboard;