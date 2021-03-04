const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://Elpepe:kaneki123@firstdatabase.lg9vq.mongodb.net/test',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};