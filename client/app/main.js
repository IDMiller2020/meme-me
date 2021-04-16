import { AuthController } from './Controllers/AuthController.js';
import PostsController from './Controllers/PostsController.js';
import CommentsController from './Controllers/CommentsController.js';
// import ValuesController from "./Controllers/ValuesController.js";

class App {
  authController = new AuthController();
  postsController = new PostsController();
  commentsController = new CommentsController();
}

window['app'] = new App();
