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
                        key={item._id}
                        className="transaction"
                    >

                        <h3>{item.title}</h3>

                        <p>Amount: ₹{item.amount}</p>

                        <p>Type: {item.type}</p>


                        <button
                            onClick={() => editTransaction(item)}
                        >
                            Edit
                        </button>


                        {" "}


                        <button
                            onClick={() => deleteTransaction(item._id)}
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