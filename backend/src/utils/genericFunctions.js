"use-strict";
const jimp = require("jimp");

const decodeBase64Image = async (dataString) => {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error("Invalid input string");
  }

  response.type = matches[1];
  response.data = new Buffer.from(matches[2], "base64");

 
  var img = await jimp.read(response.data)
  
    if (img.bitmap.width > 0 && img.bitmap.height > 0) {
   
      return response;
    } else {
      return Error("Error");
    }

 
};



module.exports = decodeBase64Image;
