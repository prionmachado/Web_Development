const mongoose = require('mongoose');
const Chat = require('./models/chat.js'); // your Chat model

// MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/fakewhatsapp";

async function initDB() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB successfully!");

        // Clear existing chats
        await Chat.deleteMany({});
        console.log("Cleared existing chats.");

        // Sample chat data
        const allChats = [
            { from: "Alice", to: "Bob", message: "Hey Bob, did you finish the JavaScript assignment?" },
            { from: "Bob", to: "Alice", message: "Almost done, just debugging the last function." },
            { from: "Charlie", to: "Dave", message: "Bro, are you coming to the gym today?" },
            { from: "Dave", to: "Charlie", message: "Yeah, around 6 PM. Leg day today." },
            { from: "Eve", to: "Frank", message: "Did you watch the new thriller movie released yesterday?" },
            { from: "Frank", to: "Eve", message: "Not yet, planning to watch it this weekend." },
            { from: "Grace", to: "Heidi", message: "Reminder: team meeting at 10 AM tomorrow." },
            { from: "Heidi", to: "Grace", message: "Got it, I'll prepare the slides tonight." },
            { from: "Ivan", to: "Judy", message: "Can you send me the project documentation?" },
            { from: "Judy", to: "Ivan", message: "Sure, I'll upload it to Google Drive." },
            { from: "Mallory", to: "Niaj", message: "Did you push the latest code to GitHub?" },
            { from: "Niaj", to: "Mallory", message: "Yes, check the new branch called feature-auth." },
            { from: "Oscar", to: "Peggy", message: "Want to grab coffee after class?" },
            { from: "Peggy", to: "Oscar", message: "Sure, the café near campus?" },
            { from: "Rupert", to: "Sybil", message: "I'm learning MongoDB today. It's interesting!" },
            { from: "Sybil", to: "Rupert", message: "Nice! Try building a small CRUD project." },
            { from: "Trent", to: "Uma", message: "Did you deploy the website on Vercel?" },
            { from: "Uma", to: "Trent", message: "Yes, but I'm fixing some UI bugs." },
            { from: "Victor", to: "Walter", message: "How's the internship application going?" },
            { from: "Walter", to: "Victor", message: "Still preparing my portfolio." },
            { from: "Xavier", to: "Yvonne", message: "Have you tried the new AI coding tool?" },
            { from: "Yvonne", to: "Xavier", message: "Yes, it helped me refactor my code." },
            { from: "Zara", to: "Aaron", message: "Let's practice DSA problems tonight." },
            { from: "Aaron", to: "Zara", message: "Good idea, maybe start with arrays." },
            { from: "Bella", to: "Chris", message: "Did you finish the database schema?" },
            { from: "Chris", to: "Bella", message: "Yes, using Mongoose schemas." },
            { from: "Dylan", to: "Elena", message: "I'm building a chat app using Node and MongoDB." },
            { from: "Elena", to: "Dylan", message: "Nice! Add timestamps and message status." },
            { from: "Felix", to: "Gina", message: "Server crashed again. Checking the logs." },
            { from: "Gina", to: "Felix", message: "Let me know if you need help debugging." }
        ];
        // Insert new chats
        await Chat.insertMany(allChats);
        console.log("Database seeded with new chats.");

    } catch (err) {
        console.error("Error initializing database:", err);
    } finally {
        // Close the connection
        await mongoose.connection.close();
        console.log("MongoDB connection closed.");
    }
}

// Run the seeding function
initDB();
