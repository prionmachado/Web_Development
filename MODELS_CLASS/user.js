// One to Few Relationship

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

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User = mongoose.model('User', userSchema);

const addUsers = async () => {
    const user1 = new User({
        username: 'SherlockHolmes',
        addresses: [
            {
                location: '123 Main St',
                city: 'Springfield'
            },
        ],
    });
    user1.addresses.push({ location: '456 Elm St', city: 'Shelbyville' });
    let result = await user1.save();
    console.log(result);
};

addUsers().then(() => {
    console.log("User added with addresses");
    mongoose.connection.close();
}).catch(err => {
    console.error("Error adding user:", err);
}); 