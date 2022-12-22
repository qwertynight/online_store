const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const checkMiddleware = require('../middleware/checkMiddleware')

router.post('/', checkMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router