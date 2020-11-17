const express=require(`express`)
const router = express.Router()
const colorCtrl = require(`../controllers/colors`)

router.get(`/purple`, colorCtrl.purple)
router.get(`/green`, colorCtrl.green)
router.get(`/red`, colorCtrl.red)
router.get(`/blue`, colorCtrl.blue)
router.get(`/sst`, colorCtrl.sst)
router.get(`/swab`, colorCtrl.swab)

module.exports = router