import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { usersService } from '../services/UsersService'
import { BadRequest } from '../utils/Errors'

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .get('', this.getAll)
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.findById)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const data = await usersService.getAll(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async findById(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const data = await usersService.findById({ _id: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const data = await usersService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const found = await this.findById(req.userInfo.id)
      if (found.creatorId !== req.userInfo.id) {
        throw new BadRequest('NOT YOURS')
      }
      const data = await usersService.remove(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
