import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //we can add a random string to keep it unique
    cb(null, file.originalname + " " + uniqueSuffix)
  }
})

export const upload = multer({ storage })