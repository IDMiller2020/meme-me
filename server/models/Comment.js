import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    creatorId: { type: String, ref: 'Account', required: true },
    topComment: { type: String },
    bottomComment: { type: String, required: true },
    likes: { type: Number, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Comment.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Comment
