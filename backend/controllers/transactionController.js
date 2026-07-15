const Transaction = require("../models/Transaction");


const createTransaction = async (req, res) => {

    try {

        const { title, amount, type } = req.body;

        const transaction = await Transaction.create({
            title,
            amount,
            type
        });

        res.status(201).json(transaction);

    } catch (error) {

        res.status(500).json({
            message: "Failed to create transaction",
            error: error.message
        });

    }

};


const getTransactions = async (req, res) => {

    try {

        const transactions = await Transaction.find()
            .sort({ createdAt: -1 });

        res.status(200).json(transactions);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch transactions",
            error: error.message
        });

    }

};


const deleteTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findByIdAndDelete(
            req.params.id
        );

        if (!transaction) {

            return res.status(404).json({
                message: "Transaction not found"
            });

        }

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


const updateTransaction = async (req, res) => {

    try {

        const { title, amount, type } = req.body;

        const transaction = await Transaction.findByIdAndUpdate(

            req.params.id,

            {
                title,
                amount,
                type
            },

            {
                new: true,
                runValidators: true
            }

        );

        if (!transaction) {

            return res.status(404).json({
                message: "Transaction not found"
            });

        }

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