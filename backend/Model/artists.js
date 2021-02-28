const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema(
  {
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      albums: [{ type: Schema.Types.ObjectId, ref: "Album" }],
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("Artist", artistSchema);
