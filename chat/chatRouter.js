import express from 'express'
import multer from 'multer'
import { geminiTextStream,geminiImageInput,geminiText } from './gemini.js'

const upload = multer({ dest: 'uploads/' });


const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World! from chatRouter.js ')
})
router.post('/process-text-stream', geminiTextStream) //outputs text as stream
router.post('/process-text',geminiText) //outputs text as string
router.post('/process-image', upload.single('image'), geminiImageInput)

export default router