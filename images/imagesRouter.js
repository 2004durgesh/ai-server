import express from 'express'
import { falAI } from './fal.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: '🖼️ Welcome to the images endpoint! 🖼️',
        routes:"/fal"
    })
})
router.post('/fal', falAI)

export default router