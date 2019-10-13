const express = require('express');
const router = express.Router();
const expenseCtrl = require('../../controllers/expenses');


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.post('/', checkAuth, expenseCtrl.createExpense);
router.delete('/:id', expenseCtrl.delete);
router.put('/:id', expenseCtrl.update);

router.get('/', expenseCtrl.index);
router.get('/:id', expenseCtrl.show);


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }


module.exports = router;