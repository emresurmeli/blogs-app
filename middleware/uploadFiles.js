import util from 'util'
import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'

const { DATABASE_URI, DEV_DATABASE_URI } = process.env

// Define a storage configuration using GridFsStorage class
const storage = new GridFsStorage({
  // MongoDB connection string(must include db name path)
  url: process.env.ENV === 'production' ? DATABASE_URI : DEV_DATABASE_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg']

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`
      return filename
    }
    
    return {
      bucketName: 'images',
      filename: `${Date.now()}-blogAppImage-${file.originalname}`
    }
  }
})

const uploadFiles = multer({ storage }).single('file')
const uploadFilesMiddleware = util.promisify(uploadFiles)

export default uploadFilesMiddleware
