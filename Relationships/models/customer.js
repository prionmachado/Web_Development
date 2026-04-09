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

// PRE MIDDLEWARE 
// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("Pre middleware");
// });

// POST MIDDLEWARE 
customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let result = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(result);
    }
});

const Order = mongoose.model('Order', orderSchema);
const Customer = mongoose.model('Customer', customerSchema);

const addOrders = async () => {
    let result = await Order.insertMany([
        { item: 'Laptop', price: 1200 },
        { item: 'Phone', price: 800 },
        { item: 'Tablet', price: 600 }
    ]);
    console.log(result);
};

const addCustomers = async () => {
    const newCustomer = new Customer({
        name: 'Raj'
    });

    let newOrder = new Order ({
        item: 'Pizza',
        price: 250
    });

    newCustomer.orders.push(newOrder);

    await newCustomer.save();
    await newOrder.save();

    console.log("Added new Customer");
};

const deleteCustomer = async () => {
    let result = await Customer.findByIdAndDelete("69b131974d7393f3f4e4443d");
    console.log(result);
}  // deletes only the customer, not the their related orders

// deleteCustomer()
//     .then(() => {
//         console.log("Customer Deleted");
//         mongoose.connection.close();
//     }).catch(err => {
//         console.error("Error deleting customer:", err);
//     });

const findCustomers = async () => {
    let result = await Customer.find({}).populate('orders');
    console.log(result[0]);
};

// findCustomers()
//     .then(() => {
//         mongoose.connection.close();
//     }
//     ).catch(err => {
//         console.error("Error finding customers:", err);
//     });

// addCustomers()
//     .then(() => {
//         mongoose.connection.close();
//     }).catch(err => {
//         console.error("Error adding customer:", err);
//     });

// addOrders()
//     .then(() => {
//         console.log("Orders Added");
//         mongoose.connection.close();
//     }).catch((err) => {
//         console.error("Error adding orders:", err);
//     }); 