const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkMiddleware = require('../middleware/checkMiddleware')

router.post('/', checkMiddleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router