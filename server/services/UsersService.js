import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class UsersService {
  async getAll(query = {}) {
    return await dbContext.Users.find(query)
  }

  async findById(id) {
    const user = await dbContext.Users.findById(id)
    if (!user) {
      throw new BadRequest('Invalid Id')
    }
    return user
  }

  async create(body) {
    return await dbContext.Users.create(body)
  }
}

export const usersService = new UsersService()
