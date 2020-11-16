const express = require(`express`)
const router = express.Router()
const specimenCtrl = require(`../controllers/specimens`)

router.get(`/`, specimenCtrl.index)
router.get(`/new`, specimenCtrl.new)
router.delete(`/:id`, specimenCtrl.delete)
router.put('/:id/', specimenCtrl.update)
router.post(`/new`, specimenCtrl.create)
router.get(`/:id/edit`, specimenCtrl.edit)
router.get(`/all`, specimenCtrl.show)

module.exports = router