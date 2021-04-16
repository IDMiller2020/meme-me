import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    imgUrl: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Post
