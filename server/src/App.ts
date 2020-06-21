import * as express from 'express'
import PullRequests from './services/PullRequests';

class App {
  public express;

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json(PullRequests.fetch())
    })
    this.express.use('/', router)
  }
}

export default new App().express