import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'

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
      req.body.creatorId = req.postInfo.id
      const data = await postsService.findById({ _id: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const data = await postsService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
}

// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkhCbWxsQjNiS2tuSXZZYWY5X2RqeiJ9.eyJpc3MiOiJodHRwczovL3Njb3R0Y29kZXdvcmtzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2MDc5YzhjNDZiNGRlOTAwNjk1YjkxYWYiLCJhdWQiOlsiaHR0cHM6Ly9tZW1lLW1lLmNvbSIsImh0dHBzOi8vc2NvdHRjb2Rld29ya3MudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYxODU5OTc5NiwiZXhwIjoxNjE4Njg2MTk2LCJhenAiOiJ2NUV4UktyNFRuWVYycGgwdFpDMXNxUG4xbUs0eW5ISyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJwZXJtaXNzaW9ucyI6W119.J0JbP4IZ3FgTxVfGshUya3oyh2RIiLJKjPN-_zcSf6SAo-k6qzpvuENEXqGhXd_aTHH92IorwvmuAiFAayhAY48yJNLqAEtJZxmxo88sBM9CWcJHIp5EoOucSFusOaVH34azD7w0D_ptFYS3myJnRUZcynCkg8CMWCaSWHZy8M9EPn0JdvfZFGF_XEgdWr99e_ilhFT0Y3AnVc4tWIpRegVTxUgOsJSdfxwSeD0SMhyC-BQugbwASBkDXpii7fxkmUQ_v5OllrUeRBYRm4pjHydFY1tTCxmxLpjw9BuMJRUwhl1Uiwxdd-70CAZCJ12W2QnmWYQFeYI8nqOCMt0WRQ
