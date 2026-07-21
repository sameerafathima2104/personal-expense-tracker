const Transaction = require("../models/Transaction");


// CREATE TRANSACTION
const createTransaction = async (req, res) => {

    try {

        const { title, amount, type } = req.body;

        const transaction = await Transaction.create({

            title,
            amount,
            type,
            userId: req.user.id

        });

        res.status(201).json(transaction);

    } catch (error) {

        res.status(500).json({

            message: "Failed to create transaction",
            error: error.message

        });

    }

};


// GET ALL TRANSACTIONS OF LOGGED-IN USER
const getTransactions = async (req, res) => {

    try {

        const transactions = await Transaction.find({

            userId: req.user.id

        }).sort({ createdAt: -1 });

        res.status(200).json(transactions);

    } catch (error) {

        res.status(500).json({

            message: "Failed to fetch transactions",
            error: error.message

        });

    }

};


// DELETE TRANSACTION
const deleteTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findOne({

            _id: req.params.id,
            userId: req.user.id

        });

        if (!transaction) {

            return res.status(404).json({

                message: "Transaction not found"

            });

        }

        await transaction.deleteOne();

        res.status(200).json({

            message: "Transaction deleted successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: "Failed to delete transaction",
            error: error.message

        });

    }

};


// UPDATE TRANSACTION
const updateTransaction = async (req, res) => {

    try {

        const { title, amount, type } = req.body;

        const transaction = await Transaction.findOne({

            _id: req.params.id,
            userId: req.user.id

        });

        if (!transaction) {

            return res.status(404).json({

                message: "Transaction not found"

            });

        }

        transaction.title = title;
        transaction.amount = amount;
        transaction.type = type;

        await transaction.save();

        res.status(200).json(transaction);

    } catch (error) {

        res.status(500).json({

            message: "Failed to update transaction",
            error: error.message

        });

    }

};


module.exports = {

    createTransaction,
    getTransactions,
    deleteTransaction,
    updateTransaction

};