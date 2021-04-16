import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async find(query = {}) {
    return await dbContext.Comments.find(query)
  }

  async remove(id) {
    const data = await dbContext.Comments.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Deleted'
  }

  async findById(id) {
    const comment = await dbContext.Comments.findById(id)
    if (!comment) {
      throw new BadRequest('Invalid Id')
    }
    return comment
  }

  async create(body) {
    return await dbContext.Comments.create(body)
  }
}

export const commentsService = new CommentsService()
