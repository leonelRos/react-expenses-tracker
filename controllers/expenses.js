var Expense = require('../models/expenses');

module.exports = {
    createExpense,
    delete: deleteOne,
    update,
    index,
    show,
}

async function createExpense(req, res) {
    try {
        let newExpense = new Expense(req.body);
        newExpense.user = req.user.id;
        await newExpense.save();
        res.json(newExpense);
    } catch(err) {
        res.status(400).json(err);
    }
}


async function deleteOne(req, res) {
    const deletedExpense = await Expense.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedExpense);
  }
  
  async function update(req, res) {
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedExpense);
  }

  async function index(req, res) {
    const items = await Expense.find({});
    res.status(200).json(items);
  }
  
  async function show(req, res) {
    const item = await Expense.findById(req.params.id);
    res.status(200).json(item);
  }