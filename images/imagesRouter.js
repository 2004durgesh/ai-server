import express from 'express'
import multer from 'multer'
import { falAI } from './fal.js'

const upload = multer()
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World! from imagesRouter.js')
})
router.post('/fal', upload.single('file'), falAI)

export default router