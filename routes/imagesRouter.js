import { Router } from 'express'
import { getFilesNames, downloadFiles, uploadFiles } from '../controllers/imageUploadController.js'

const router = Router()

// GET
router.get('/download/:fileName', downloadFiles)
router.get('/get', getFilesNames)

// POST
router.post('/upload', uploadFiles)

export default router