function TransactionList({
    transactions,
    deleteTransaction,
    editTransaction
}) {

    return (

        <div>

            <h2>Transaction History</h2>

            {transactions.length === 0 ? (
                <p>No transactions yet.</p>
            ) : (

                transactions.map((item, index) => (

                    <div
                       key={index}
                       className="transaction"
>


                        <h3>{item.title}</h3>

                        <p>Amount: ₹{item.amount}</p>

                        <p>Type: {item.type}</p>

                        <button
                            onClick={() => editTransaction(index)}
                        >
                            Edit
                        </button>

                        {" "}

                        <button
                            onClick={() => deleteTransaction(index)}
                        >
                            Delete
                        </button>

                    </div>

                ))

            )}

        </div>

    );

}

export default TransactionList;