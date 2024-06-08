import express from 'express'
import multer from 'multer'
import { falAI } from './fal.js'

const upload = multer()
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: '🖼️ Welcome to the images endpoint! 🖼️',
        routes:"/fal"
    })
})
router.post('/fal', upload.single('file'), falAI)

export default router