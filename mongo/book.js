const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazonDB");
};

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        maxLength: 100
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1,"Price must be at least 1"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Science', 'Biography', 'Children', 'Other'],
    },
    genre: {
        type: [String],
    }
});

const Book = mongoose.model('Book', bookSchema); 

// let book1 = new Book({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 10.99
// });
// book1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// let book2 = new Book({
//     title: "1984",
//     author: "George Orwell",
//     price: 8.99,
//     discount: 1.5
// });
// book2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// let book3 = new Book({
//     title: "A Brief History of Time",
//     author: "Stephen Hawking",
//     price: 15.00,
//     category: "Science",
//     genre: ["Science", "Non-Fiction"]
// });
// book3.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Book.findByIdAndUpdate('690c388d89a93842ac5f6e9b', { price: -10 }, { new: true , runValidators: true })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err.errors.price.properties.message);
// }); 