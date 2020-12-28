import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    lists: [
      {
        title: { type: String, required: true },
        cards: [
          {
            content: { type: String, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true, collection: "boards" }
);

export default mongoose.model("Board", schema);
