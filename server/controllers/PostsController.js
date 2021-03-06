import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'
import { BadRequest } from '../utils/Errors'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
    // NOTE: Beyond this point all routes require Authorization tokens (the post must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.findById)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async remove(req, res, next) {
    try {
      const found = await this.findById(req.userInfo.id)
      if (found.creatorId !== req.userInfo.id) {
        throw new BadRequest('NOT YOURS')
      }
      const data = await postsService.remove(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const data = await postsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async findById(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const data = await postsService.findById({ _id: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const data = await postsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
