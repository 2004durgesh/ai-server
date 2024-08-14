import express from 'express'
import { geminiTextStream,geminiImageInput,geminiText } from './gemini.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message:"'💬 Hey there, Chat with us! 🗨️'",
        routes:["/process-text-stream","/process-text","/process-image"]
    })
})
router.post('/process-text-stream', geminiTextStream) //outputs text as stream
router.post('/process-text',geminiText) //outputs text as string
router.post('/process-image', geminiImageInput)

export default router