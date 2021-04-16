import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {
  async find(query = {}) {
    return await dbContext.Posts.find(query)
  }

  async remove(id) {
    const data = await dbContext.Posts.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Deleted'
  }

  async findById(id) {
    const post = await dbContext.Posts.findById(id)
    if (!post) {
      throw new BadRequest('Invalid Id')
    }
    return post
  }

  async create(body) {
    return await dbContext.Posts.create(body)
  }
}

export const postsService = new PostsService()
