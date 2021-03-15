import Model from './model'

class Controller {
  constructor() {
    this.getLists = this.getLists.bind(this)
  }

  async getLists(req, res) {
    try {
      const data = await Model.find()
      res.status(200).json({
        status: 200,
        data: data,
      })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        status: 500,
        data: 'Error found while retrieving data',
      })
    }
  }
}

export default Controller
