const express = require("express")

const router = express.Router()

router.get("/searchOne", (req, res, next) => {
    res.json({
        a: 1,
        b: 2
    })
})

module.exports = router