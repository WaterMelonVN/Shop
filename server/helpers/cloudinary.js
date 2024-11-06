const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: "dghwjdvgw",
    api_key: "923447437413814",
    api_secret: "DdwigqYIFXidpNViMoV_ihWPJ0U",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });

    return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
