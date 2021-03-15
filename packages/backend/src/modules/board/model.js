import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    cards: [
      {
        content: { type: String, required: true },
      },
    ],
  },
  { timestamps: true, collection: 'lists' }
)

export default mongoose.model('List', schema)
