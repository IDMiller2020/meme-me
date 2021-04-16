import mongoose from 'mongoose'
import UserSchema from '../models/User'
import PostSchema from '../models/Post'
// import CommentSchema from '../models/Comment'

import AccountSchema from '../models/Account'

class DbContext {
  Users = mongoose.model('User', UserSchema);
  Posts = mongoose.model('Post', PostSchema);
  // Comments = mongoose.model('Comment', CommentSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
