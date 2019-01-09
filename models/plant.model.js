const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let plantSchema = new Schema({
    plantName: {type: String, required: true, max: 50},
    plantDescription: {type: String, required: true, max: 300}
});

module.exports = mongoose.model('Plant', plantSchema);