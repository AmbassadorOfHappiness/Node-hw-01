const multer = require('multer');
const UPLOAD_DIR = process.env.UPLOAD_DIR;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR)
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now().toString()}_${file.originalname}`)
  }
})

const upload = multer({ 
  storage: storage,
  limits: {fileSize:500000},
  fileFilter: (req, file, cb) => {
 
    // Функция должна вызывать `cb` с булевым значением,
    // которое показывает, следует ли принять файл
  
    // Чтобы принять файл, используется как аргумент `true` таким образом:
    if (file.mimetype.includes('image')) {
      return cb(null, true);
    }

    // Вы можете всегда вернуть ошибку, если что-то пошло не так:
    cb(new Error('Wrong format file for avatar!'))
  
  }
})

module.exports = upload;