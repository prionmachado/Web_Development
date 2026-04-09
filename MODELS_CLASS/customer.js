// One to Many Relationship

const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB  
const mongoURL = "mongodb://127.0.0.1:27017/relationDemo";

main().then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(mongoURL);
};

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        },
    ],
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

// const addOrders = async () => {
//     let result = await Order.insertMany([
//         { item: 'Laptop', price: 1200 },
//         { item: 'Phone', price: 800 },
//         { item: 'Tablet', price: 600 }
//     ]);
//     console.log(result);
// };

// const addCustomers = async () => {
//     const customer1 = new Customer(
//         { name: 'Alice' },
//     );

//     let order1 = await Order.findOne({ item: 'Phone' });
//     let order2 = await Order.findOne({ item: 'Tablet' });

//     customer1.orders.push(order1);
//     customer1.orders.push(order2);
//     let result = await customer1.save();
//     console.log(result);
// };

const findCustomers = async () => {
    let result = await Customer.find({}).populate('orders');
    console.log(result[0]);
};

findCustomers()
    .then(() => {
        mongoose.connection.close();
    }
    ).catch(err => {
        console.error("Error finding customers:", err);
    });

// addCustomers().then(() => {
//     console.log("Customer added with orders");
//     mongoose.connection.close();
// }).catch(err => {
//     console.error("Error adding customer:", err);
// });

// addOrders().then(() => {
//     console.log("Orders Added");
//     mongoose.connection.close();
// }).catch((err) => {
//     console.error("Error adding orders:", err);
// });