const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const ExpressError = require('./ExpressError');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));

main()
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch(err => {
        console.log(err);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
};

// function for WrapAsync to handle async errors
// No need to use try-catch in each route instead use this asyncWrap
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
};

// root route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Index route
app.get('/chats', asyncWrap(async (req, res) => {
    let chats = await Chat.find()
    res.render('index.ejs', { chats });
}));

// new route
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});
// then pushing it to the database
app.post('/chats', asyncWrap(async (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
    });
    await newChat.save()
    console.log("New chat saved successfully!");
    res.redirect('/chats');
}));

//Show route - Handling async errors
app.get('/chats/:id', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        return next(new ExpressError('Chat Not Found', 404));
    }
    res.render('show.ejs', { chat });
}));

// edit route
app.get('/chats/:id/edit', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        return next(new ExpressError('Chat Not Found', 404));
    }
    res.render('edit.ejs', { chat });
}));
// update route
app.put('/chats/:id', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { message: newMessage } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMessage }, { runValidators: true, new: true });
    if (!updatedChat) {
        return next(new ExpressError('Chat Not Found', 404));
    }
    console.log("Chat updated successfully!");
    res.redirect('/chats');
}));

// delete route
app.delete('/chats/:id', asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    if (!deletedChat) {
        return next(new ExpressError('Chat Not Found', 404));
    }
    console.log("Chat deleted successfully!");
    res.redirect('/chats');
}));

// Validation Error Handler
const handleValidationErr = (err) => {
    console.log("This was a validation error");
    console.dir(err.message);
    err.statusCode = 400;
    return err;
};

// Cast Error Handler
const handleCastErr = (err) => {
    console.log("This was a cast error");
    console.dir(err.message);
    err.statusCode = 400;
    err.message = "Invalid Chat ID";
    return err;
};

// Middleware to log error names 
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err);
    }
    if (err.name === 'CastError') {
        err = handleCastErr(err);
    }
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = 'Something went wrong' } = err;
    res.status(statusCode).send(message);
});

// server listening
app.listen(8080, () => {
    console.log('Server is running on port 8080');
}); 