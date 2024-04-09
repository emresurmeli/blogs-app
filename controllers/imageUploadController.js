import mongoose from 'mongoose'
import db from '../config/dbConnection.js'
import upload from '../middleware/uploadFiles.js'

const uploadFiles = async (req, res) => {
  try {
    const uploadReq = await upload(req, res)

    if (req.file === undefined) {
      res.json({
        message: 'You must select a file.',
      });
    }

    res.json({
      message: 'File has been uploaded.',
    });
  } catch (error) {
    console.error(error)
    res.json({
      message: `Error when trying upload image: ${error}`,
    });
  }
}

const getFilesNames = async (req, res) => {
  try {
    const images = db.collection('images.files')
    const cursor = await images.find({})

    const fileInfos = [];
    await cursor.forEach((doc) => {
      fileInfos.push({
        name: doc.filename,
        url: 'localhost:3000/files/' + doc.filename,
      });
    });
  
    res.json(fileInfos)
  } catch (error) {
    console.error(error)
    res.json({
      message: `Error when trying upload image: ${error}`,
    });
  }
}

const downloadFiles = async (req, res) => {
  try {
    const bucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: 'images'
    })
    const downloadStream = bucket.openDownloadStreamByName(req.params.fileName)
    downloadStream.on('data', (data) => res.status(200).write(data))
    downloadStream.on('error', (err) => res.status(404).send({
      message: 'Cannot download the Image!',
      error: err
    }))
    downloadStream.on('end', () => res.end())
  } catch (error) {
    return res.status(500).send({
      message: error.message
    })
  }
}

export {
  uploadFiles,
  getFilesNames,
  downloadFiles
}