const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
const TypeController = require('../controllers/typeController')
const checkMiddleware = require('../middleware/checkMiddleware')

router.post('/', checkMiddleware('ADMIN'), TypeController.create)
router.get('/', TypeController.getAll)

module.exports = router