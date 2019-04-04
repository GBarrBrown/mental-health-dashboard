const express = require('express')
const router = express.Router()

// GET /api/v1/example
router.get('/', (req,res) => {
    res.json([
        {
            testSting: "test",
            testNum: 7,
            testBoolean: true,
            testArray: ["item 1", "item 2"],
            testObj: {key: "value"}
        }
    ])
})

// POST /api/v1/example // DB not configured at all
router.post('/', (req,res) => {

})
module.exports = router