const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('cloudinary').v2;
const { param } = require('../Routes/EmployeeRoutes')


cloudinary.config({
    cloud_name: 'dsnhqqvdr',
    api_key: '931813353378116',
    api_secret: 'WjRcmy8LE1IyHLeeXtitQP4lv68'
})

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
         folder : 'uploads',
         format : async (req, file) => 'png',
         public_id : (req, file) => file.originalname.split('.')[0] + ""
    }
})

const cloudinaryFileUploader = multer({storage : storage})

module.exports = {
    cloudinaryFileUploader
}