const { Schema, model} = require("mongoose")

const schema = new Schema({
    name: { type: String, required: [true, "Name is required"]},
    description: { type: String, required: [true, "Description is required"], minLength: 10},
    imageURL: { type: String, required: [true, "ImageURL is required"], match: /^https?/},
    difficulty: { type: Number, required: [true, "Difficulty level is required"], min: 1, max: 6},
    accessories: [{type: Schema.Types.ObjectId, ref: "Accessory"}],
    owner: {type: Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = model("Cube", schema)