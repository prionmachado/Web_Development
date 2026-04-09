const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
};

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);  // User --> users in mongoDB

// const user1 = new User({
//     name: "John Doe",
//     email: "john@yahoo.com",
//     age: 30
// });
// user1.save();

// const user2 = new User({
//     name: "Jane Smith",
//     email: "jane@gmail.com",
//     age: 25
// });
// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// insertMany
// User.insertMany([
//     { name: "Alice Johnson", email: "alice@yahoo.com", age: 28 },
//     { name: "Bob Brown", email: "bob@gmail.com", age: 32 },
//     { name: "Charlie Davis", email: "davis@gmail.com", age: 22 }
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// find
// User.find({ age: { $gt: 30 } })  // findOne is also there
// .then((res) => {
//     // console.log(res);
//     console.log(res[0].name);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.findById("690b79bf7e8ea76b3ac9cf69")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// Update
// User.updateOne({ name: "Alice Johnson" }, { age: 29 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     }); 
// User.updateMany({ age: {$gt: 30} }, { age: 40 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     }); 

// findOneAndUpdate
// User.findOneAndUpdate({ name: "Bob Brown" }, { age: 34 }, { new: true }) 
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     }); 

// delete
// User.deleteOne({ name: "Charlie Davis" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// User.deleteMany({ age: 30 })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });