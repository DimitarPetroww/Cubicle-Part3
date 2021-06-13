const { Schema, model} = require("mongoose")

const schema = new Schema({
    name: { type: String, required: [true, "Name is required"]},
    description: { type: String, required: [true, "Description is required"], minLength: 10},
    imageURL: { type: String, required: [true, "ImageURL is required"], match: /^https?/},
})

module.exports = model("Accessory", schema)