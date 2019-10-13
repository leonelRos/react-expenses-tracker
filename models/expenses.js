var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: String,
    },
    name: {
        type: String,
    },
    cost: {
        type: Number,
    }
}, {
    timestamps: true
});

expenseSchema.pre('save', function(next) {
    this.category = this.category.substr().toUpperCase();
    next();
})

module.exports = mongoose.model('Expense', expenseSchema);
