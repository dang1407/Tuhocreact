const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  mongoose.connect("mongodb://127.0.0.1:27017/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));


    const Course = new Schema({
          _id: Object,
          name: String,
          description: String,
          // img: {type: String},
          // createdAt: {type: Date, default: Date.now},
          // updatedAt: {type: Date, default: Date.now},
    }, {collection: 'Course'});
app.get('/courses', async)