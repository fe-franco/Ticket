var mimeTypes = require("mimetypes");
const { Storage } = require("@google-cloud/storage");
const path = require("path");
const uuidv4 = require("uuid/v4");
const storage = new Storage({
  keyFilename: path.join(__dirname, "../../google-bucket.json"),
  projectId: "solort",
});
exports.uploadImage = async (imageFunc="", userName="") => {
  try {
  var image = imageFunc,
    mimeType = image.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1],
    fileName = userName + "_" + uuidv4() + mimeTypes.detectExtension(mimeType),
    base64EncodedImageString = image.replace(/^data:image\/\w+;base64,/, ""),
    imageBuffer = new Buffer(base64EncodedImageString, "base64");

  // Instantiate the GCP Storage instance

  var bucket = storage.bucket("solort-bucket");

  // Upload the image to the bucket
  var file = bucket.file(fileName);

  let error = await file.save(imageBuffer, {
    metadata: { contentType: mimeType },

    validation: "md5",
  });

  if (error) {
    return null;
  } else {
    return fileName;
  }

} catch (error) {
  return null
}
};

exports.getImage = async (imgId, res) => {
  try {
  var bucket = storage.bucket("solort-bucket");
  console.log(imgId);
  if (!imgId || imgId == undefined || typeof imgId == undefined) {
    console.log("EAIGMEAKGMAEKIM")
    return res.send({ status: "Error" });
  }
  let file = bucket.file(imgId);

  let readStream = file.createReadStream();

  res.setHeader("content-type", "image/jpeg");
  readStream.pipe(res);
} catch (error) {
  return error
}
};
