// One to Squillions Relationship

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
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// const addData = async () => {
//     const user1 = new User({
//         username: 'john_doe',
//         email: 'john@gmail.com'
//     });
//     const post1 = new Post({ content: 'Hello World!', likes: 10 });
//     const post2 = new Post({ content: 'Learning Mongoose!', likes: 20 });

//     post1.user = user1;
//     post2.user = user1;

//     await user1.save();
//     await post1.save();
//     await post2.save();
//     console.log("Data Added");
// } 

// addData()
//     .then(() => {
//         mongoose.connection.close();
//     }
//     ).catch(err => {
//         console.error("Error adding data:", err);
//     });

const getData = async () => {
    const post = await Post.findOne({}).populate('user'); // populate('user', 'username') if you want to display only username
    console.log(post);
}; 

getData()
.then(() => {
    mongoose.connection.close();
}).catch(err => {
    console.error("Error retrieving data:", err);
}); 