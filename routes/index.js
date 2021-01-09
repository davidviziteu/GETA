const { Router } = require('express')
const router = Router()
const {getFruits, postFruit, patchFruit, deleteFruit} = require('../controller')

router.get('/fruit',getFruits)
router.post('/fruit',postFruit)
router.patch('/fruit',patchFruit)
router.delete('/fruit',deleteFruit)


module.exports = router